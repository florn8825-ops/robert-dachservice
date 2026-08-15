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
  '/leistungen/dachdaemmung/',
  '/leistungen/flachdach/',
  '/leistungen/spenglerarbeiten/',
  '/leistungen/neubau-neueindeckung/',
  '/leistungen/dachisolierung/',
  '/leistungen/flachdachsanierung/',
  '/leistungen/dachentwaesserung/',
];

test('homepage renders with local assets and main navigation', async ({ page }) => {
  const response = await page.goto('/');
  expect(response && response.ok()).toBeTruthy();
  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('footer')).toBeVisible();
  await expect(page.locator('h1').first()).toBeVisible();
  await expect(page.locator('img[src*="raw.githubusercontent.com"]')).toHaveCount(0);
  await expect(page.locator('img[src*="lovable.app"]')).toHaveCount(0);
});

test('key routes do not return 404/500', async ({ page }) => {
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response, `No response for ${route}`).toBeTruthy();
    expect(response.status(), route).toBeLessThan(400);
    await expect(page.locator('body')).not.toContainText('Page not found');
    await expect(page.locator('body')).not.toContainText('There has been a critical error');
  }
});

test('internal links on homepage resolve', async ({ page, request }) => {
  await page.goto('/');
  const hrefs = await page.locator('a[href^="/"]').evaluateAll((links) => [...new Set(links.map((a) => a.getAttribute('href')).filter(Boolean))]);
  for (const href of hrefs) {
    const response = await request.get(href);
    expect(response.status(), href).toBeLessThan(400);
  }
});

test('contact form exposes all required fields and upload control', async ({ page }) => {
  await page.goto('/kontakt/');
  await expect(page.locator('input[name="vorname"]')).toBeVisible();
  await expect(page.locator('input[name="nachname"]')).toBeVisible();
  await expect(page.locator('input[name="telefon"]')).toBeVisible();
  await expect(page.locator('input[name="email"]')).toBeVisible();
  await expect(page.locator('input[name="plz"]')).toBeVisible();
  await expect(page.locator('input[name="ort"]')).toBeVisible();
  await expect(page.locator('select[name="leistung"]')).toBeVisible();
  await expect(page.locator('textarea[name="beschreibung"]')).toBeVisible();
  await expect(page.locator('input[name="fotos[]"]')).toBeVisible();
  await expect(page.locator('input[name="datenschutz"]')).toBeVisible();
});

test('contact form accepts an image file before submit', async ({ page }) => {
  await page.goto('/kontakt/');
  const fileInput = page.locator('input[name="fotos[]"]');
  await fileInput.setInputFiles({
    name: 'test-roof.png',
    mimeType: 'image/png',
    buffer: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=', 'base64'),
  });
  await expect(fileInput).toHaveValue(/test-roof\.png/);
});
