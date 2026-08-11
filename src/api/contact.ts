import { z } from "zod";
import { Resend } from "resend";

/**
 * Validation schema (same as client-side)
 */
const contactSchema = z.object({
  vorname: z.string().trim().min(1, "Bitte Vornamen angeben").max(60),
  nachname: z.string().trim().min(1, "Bitte Nachnamen angeben").max(60),
  telefon: z.string().trim().min(5, "Bitte Telefonnummer angeben").max(40),
  email: z.string().trim().email("Bitte gültige E-Mail-Adresse angeben").max(255),
  plz: z.string().trim().min(4, "Bitte PLZ angeben").max(10),
  ort: z.string().trim().min(2, "Bitte Ort angeben").max(80),
  leistung: z.string().trim().min(1, "Bitte Leistung wählen"),
  beschreibung: z.string().trim().min(10, "Bitte kurz das Vorhaben beschreiben").max(2000),
  datenschutz: z.literal(true, { message: "Bitte der Datenschutzerklärung zustimmen" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactAttachment {
  filename: string;
  content: Buffer;
  contentType: string;
}

/**
 * Process uploaded files and convert to Resend attachments
 */
async function processFileAttachments(
  formData: FormData,
  maxFiles: number = 5,
  maxSizePerFile: number = 5 * 1024 * 1024 // 5MB per file
): Promise<ContactAttachment[]> {
  const files: ContactAttachment[] = [];
  const fotos = formData.getAll("fotos");

  for (let i = 0; i < Math.min(fotos.length, maxFiles); i++) {
    const file = fotos[i];

    // Skip if not a File object
    if (!(file instanceof File)) continue;

    // Check file size
    if (file.size > maxSizePerFile) {
      throw new Error(
        `Datei ${file.name} ist zu groß (max. ${maxSizePerFile / 1024 / 1024}MB)`
      );
    }

    // Only allow images
    if (!file.type.startsWith("image/")) {
      throw new Error(`Datei ${file.name} ist kein Bild`);
    }

    // Convert File to Buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    files.push({
      filename: file.name,
      content: buffer,
      contentType: file.type,
    });
  }

  return files;
}

/**
 * Send contact form via Resend
 */
async function sendContactEmail(
  data: ContactFormData,
  attachments: ContactAttachment[]
): Promise<{ success: boolean; id?: string; error?: string }> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !contactEmail || !contactFromEmail) {
    throw new Error(
      "Fehlende Umgebungsvariablen: RESEND_API_KEY, CONTACT_EMAIL, CONTACT_FROM_EMAIL"
    );
  }

  const resend = new Resend(resendApiKey);

  // Build email body
  const emailBody = `
Neue Anfrage von ${data.vorname} ${data.nachname}

**Kontaktdaten:**
- Telefon: ${data.telefon}
- E-Mail: ${data.email}
- PLZ: ${data.plz}
- Ort: ${data.ort}

**Leistung:** ${data.leistung}

**Beschreibung:**
${data.beschreibung}

${attachments.length > 0 ? `**Anhänge:** ${attachments.length} Bild(er)` : ""}
`.trim();

  try {
    const response = await resend.emails.send({
      from: contactFromEmail,
      to: contactEmail,
      replyTo: data.email,
      subject: `Neue Anfrage: ${data.leistung} - ${data.vorname} ${data.nachname}`,
      text: emailBody,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (response.error) {
      throw new Error(`Resend error: ${response.error.message}`);
    }

    return { success: true, id: response.data?.id };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unbekannter Fehler";
    console.error("Contact email error:", message);
    return { success: false, error: message };
  }
}

/**
 * POST handler: /api/contact
 * Validates and sends contact form via email
 */
export async function POST(event: any) {
  try {
    const formData = await event.readBody();

    // Parse FormData-like object
    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errors[String(issue.path[0])] = issue.message;
      }

      return {
        ok: false,
        errors,
        message: "Validierungsfehler",
      };
    }

    const data = parsed.data;

    // Process file attachments if provided
    // Note: In TanStack Start/Nitro, files come as FormData entries
    // We'll handle this differently - see kontakt.tsx for FormData handling
    const attachments: ContactAttachment[] = [];

    // Send email
    const emailResult = await sendContactEmail(data, attachments);

    if (!emailResult.success) {
      return {
        ok: false,
        error: emailResult.error || "E-Mail konnte nicht gesendet werden",
        message: "Fehler beim E-Mail-Versand",
      };
    }

    return {
      ok: true,
      message: "Ihre Anfrage wurde erfolgreich gesendet. Wir kontaktieren Sie in Kürze.",
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unbekannter Fehler";
    console.error("Contact form error:", message);

    return {
      ok: false,
      error: message,
      message: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
    };
  }
}
