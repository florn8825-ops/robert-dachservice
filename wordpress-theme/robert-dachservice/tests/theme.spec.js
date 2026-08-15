const { test, expect } = require('@playwright/test');

const routes = [
  '/',
  '/kontakt/',
  '/dachnotdienst/',
  '/dachdecker-koeln/',
  '/dachdecker-bonn/',
  '/leistungen/dachreparatur/',
  '/leistungen/dachsanierung/',
  '/leistungen/dacheindeckung-erneuern/',
  '/leistungen/dacheindeckung-erneuern/tondachziegel/',
  '/leistungen/dacheindeckung-erneuern/betondachsteine/',
  '/leistungen/dacheindeckung-erneuern/schiefer/',
  '/leistungen/dacheindeckung-erneuern/bitumenschindeln/',
  '/leistungen/dacheindeckung-erneuern/metall-blech/',
  '/leistungen/dachdaemmung/',
  '/leistungen/dachdaemmung/aufsparrendaemmung/',
  '/leistungen/dachdaemmung/zwischensparrendaemmung/',
  '/leistungen/dachdaemmung/untersparrendaemmung/',
  '/leistungen/dachdaemmung/dampfbremse/',
  '/leistungen/flachdach/',
  '/leistungen/spenglerarbeiten/',
  '/leistungen/neubau-neueindeckung/',
  '/leistungen/dachisolierung/',
  '/leistungen/flachdachsanierung/',
  '/leistungen/dachentwaesserung/',
];

test('all primary theme routes respond without server errors', async ({ request }) => {
  for (const route of routes) {
    const response = await request.get(route);
    expect(response.status(), route).toBe(200);
  }
});

test('homepage has no external runtime image URLs', async ({ page }) => {
  const externalImages = [];
  page.on('response', response => {
    const url = response.url();
    if (response.request().resourceType() === 'image' && !url.startsWith('http://localhost:8888')) {
      externalImages.push(url);
    }
  });

  await page.goto('/');
  await page.waitForLoadState('networkidle');
  expect(externalImages, externalImages.join('\n')).toEqual([]);
});

test('contact form contains required fields and image upload', async ({ page }) => {
  await page.goto('/kontakt/');
  await expect(page.locator('form')).toBeVisible();
  for (const name of ['vorname', 'nachname', 'telefon', 'email', 'plz', 'ort', 'leistung', 'beschreibung']) {
    await expect(page.locator(`[name="${name}"]`)).toBeVisible();
  }
  await expect(page.locator('input[type="file"][name="fotos[]"]')).toBeVisible();
});

test('homepage internal links do not return 404', async ({ page, request }) => {
  await page.goto('/');
  const hrefs = await page.locator('a[href]').evaluateAll(links => links
    .map(a => a.getAttribute('href'))
    .filter(href => href && href.startsWith('/'))
  );
  const unique = [...new Set(hrefs)];
  for (const href of unique) {
    const response = await request.get(href);
    expect(response.status(), href).not.toBe(404);
  }
});
