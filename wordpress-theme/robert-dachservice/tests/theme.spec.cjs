const { test, expect } = require('@playwright/test');
const path = require('path');

const routes = [
  '/', '/kontakt/', '/dachnotdienst/', '/dachdecker-koeln/', '/dachdecker-bonn/',
  '/leistungen/dachreparatur/', '/leistungen/dachsanierung/', '/leistungen/dacheindeckung-erneuern/',
  '/leistungen/dacheindeckung-erneuern/tondachziegel/', '/leistungen/dacheindeckung-erneuern/betondachsteine/',
  '/leistungen/dacheindeckung-erneuern/schiefer/', '/leistungen/dacheindeckung-erneuern/bitumenschindeln/',
  '/leistungen/dacheindeckung-erneuern/metall-blech/', '/leistungen/dachdaemmung/',
  '/leistungen/dachdaemmung/aufsparrendaemmung/', '/leistungen/dachdaemmung/zwischensparrendaemmung/',
  '/leistungen/dachdaemmung/untersparrendaemmung/', '/leistungen/dachdaemmung/dampfbremse/',
  '/leistungen/flachdach/', '/leistungen/flachdach/bitumen/', '/leistungen/flachdach/epdm/', '/leistungen/flachdach/pvc/',
  '/leistungen/spenglerarbeiten/', '/leistungen/spenglerarbeiten/dachrinnen/', '/leistungen/spenglerarbeiten/fallrohre/',
  '/leistungen/spenglerarbeiten/dachanschluesse/', '/leistungen/spenglerarbeiten/blechverwahrungen/',
  '/leistungen/spenglerarbeiten/kehlen/', '/leistungen/spenglerarbeiten/ortgang-first/',
  '/leistungen/neubau-neueindeckung/',
];

test('all known primary theme routes respond without server errors', async ({ request }) => {
  for (const route of routes) {
    const response = await request.get(route);
    expect(response.status(), route).toBe(200);
  }
});

test('homepage has no external runtime image URLs', async ({ page }) => {
  const externalImages = [];
  page.on('response', response => {
    const url = response.url();
    if (response.request().resourceType() === 'image' && !url.startsWith('http://localhost:8888')) externalImages.push(url);
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

test('contact form accepts an image upload and stores the request', async ({ page }) => {
  await page.goto('/kontakt/');
  await page.locator('[name="vorname"]').fill('E2E');
  await page.locator('[name="nachname"]').fill('Test');
  await page.locator('[name="telefon"]').fill('+4915733645077');
  await page.locator('[name="email"]').fill('e2e@example.com');
  await page.locator('[name="plz"]').fill('50667');
  await page.locator('[name="ort"]').fill('Köln');
  await page.locator('[name="leistung"]').selectOption({ label: 'Dachreparatur' });
  await page.locator('[name="beschreibung"]').fill('Automatischer WordPress E2E Test mit Bild-Upload.');
  await page.locator('[name="datenschutz"]').check();
  await page.locator('[name="fotos[]"]').setInputFiles(path.resolve(__dirname, '../assets/Betondachstein.jpg'));
  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveURL(/kontakt=gesendet/);
  await expect(page.locator('.rd-form-success')).toContainText('erfolgreich');
});

test('homepage internal links do not return 404', async ({ page, request }) => {
  await page.goto('/');
  const hrefs = await page.locator('a[href]').evaluateAll(links => links.map(a => a.getAttribute('href')).filter(href => href && href.startsWith('/')));
  const unique = [...new Set(hrefs)];
  for (const href of unique) {
    const response = await request.get(href);
    expect(response.status(), href).not.toBe(404);
  }
});
