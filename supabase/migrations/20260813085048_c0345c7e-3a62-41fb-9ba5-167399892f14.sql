
-- 1. Restrict the SECURITY DEFINER helper to server-side use only
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO service_role;

-- 2. Rewrite leads policies to check user_roles directly (own-row read is allowed by its RLS policy)
DROP POLICY IF EXISTS "Admins can view leads" ON public.leads;
DROP POLICY IF EXISTS "Admins can update leads" ON public.leads;
DROP POLICY IF EXISTS "Admins can delete leads" ON public.leads;

CREATE POLICY "Admins can view leads" ON public.leads FOR SELECT TO authenticated
USING (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'));

CREATE POLICY "Admins can update leads" ON public.leads FOR UPDATE TO authenticated
USING (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'))
WITH CHECK (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'));

CREATE POLICY "Admins can delete leads" ON public.leads FOR DELETE TO authenticated
USING (EXISTS (SELECT 1 FROM public.user_roles ur WHERE ur.user_id = auth.uid() AND ur.role = 'admin'));

-- 3. Explicit, scoped INSERT policy for public contact form submissions
GRANT INSERT ON public.leads TO anon, authenticated;

CREATE POLICY "Anyone can submit an inquiry" ON public.leads FOR INSERT TO anon, authenticated
WITH CHECK (
  quelle = 'website'
  AND status = 'neu'
  AND length(vorname) BETWEEN 1 AND 60
  AND length(nachname) BETWEEN 1 AND 60
  AND length(telefon) BETWEEN 5 AND 40
  AND length(email) BETWEEN 5 AND 255
  AND length(plz) BETWEEN 4 AND 10
  AND length(ort) BETWEEN 2 AND 80
  AND length(leistung) BETWEEN 1 AND 80
  AND length(beschreibung) BETWEEN 10 AND 2000
);
