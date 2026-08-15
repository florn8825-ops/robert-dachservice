const { test, expect } = require('@playwright/test');

const routes = [
  '/', '/kontakt/', '/dachnotdienst/', '/dachdecker-koeln/', '/dachdecker-bonn/',
  '/ueber-uns/', '/referenzen/', '/ratgeber/', '/impressum/', '/datenschutz/', '/cookie-einstellungen/',
  '/leistungen/',
  '/leistungen/dachreparatur/', '/leistungen/dachsanierung/', '/leistungen/dacheindeckung-erneuern/',
  '/leistungen/dachdaemmung/', '/leistungen/flachdach/', '/leistungen/spenglerarbeiten/', '/leistungen/neubau-neueindeckung/',
  '/leistungen/dachisolierung/', '/leistungen/flachdachsanierung/', '/leistungen/dachentwaesserung/',
  '/leistungen/dacheindeckung-erneuern/tondachziegel/', '/leistungen/dacheindeckung-erneuern/betondachsteine/',
  '/leistungen/dacheindeckung-erneuern/schiefer/', '/leistungen/dacheindeckung-erneuern/bitumenschindeln/',
  '/leistungen/dacheindeckung-erneuern/metall-blech/', '/leistungen/flachdach/bitumen/', '/leistungen/flachdach/epdm/',
  '/leistungen/flachdach/pvc/', '/leistungen/dachdaemmung/aufsparrendaemmung/',
  '/leistungen/dachdaemmung/zwischensparrendaemmung/', '/leistungen/dachdaemmung/untersparrendaemmung/',
  '/leistungen/dachdaemmung/dampfbremse/', '/leistungen/spenglerarbeiten/dachrinnen/',
  '/leistungen/spenglerarbeiten/fallrohre/', '/leistungen/spenglerarbeiten/dachanschluesse/',
  '/leistungen/spenglerarbeiten/blechverwahrungen/', '/leistungen/spenglerarbeiten/kehlen/',
  '/leistungen/spenglerarbeiten/ortgang-first/',
  '/ratgeber/dacheindeckung-erneuern-zeitpunkt/', '/ratgeber/dacheindeckung-oder-dachsanierung/',
  '/ratgeber/undichtes-dach/', '/ratgeber/dachziegel-beschaedigt/', '/ratgeber/tondachziegel-oder-betondachsteine/',
  '/ratgeber/schiefer-dacheindeckung/', '/ratgeber/flachdach-bitumen-epdm-pvc/', '/ratgeber/welche-dachdaemmung/',
  '/ratgeber/sturmschaden-am-dach/', '/ratgeber/dachnotdienst-wann-noetig/',
];

function reportRow(route, status, title, result, error = '') {
  return `${route}\t${status}\t${result}\t${title.replace(/\s+/g, ' ').slice(0, 100)}${error ? `\t${error}` : ''}`;
}

test('URL report: every known route', async ({ page }) => {
  const rows = ['URL\tHTTP\tRESULT\tTITLE\tERROR'];
  for (const route of routes) {
    try {
      const response = await page.goto(route, { waitUntil: 'domcontentloaded' });
      const status = response ? response.status() : 0;
      const title = await page.title();
      const body = await page.locator('body').innerText().catch(() => '');
      const badBody = /Page not found|There has been a critical error|Internal Server Error/i.test(body);
      const ok = status >= 200 && status < 400 && !badBody;
      rows.push(reportRow(route, status, title, ok ? 'PASS' : 'FAIL', badBody ? 'error text found in body' : ''));
    } catch (error) {
      rows.push(reportRow(route, 0, '', 'FAIL', error.message));
    }
  }
  console.log(`\nURL REPORT\n${rows.join('\n')}\nEND URL REPORT\n`);
  const failures = rows.slice(1).filter((row) => row.includes('\tFAIL\t'));
  expect(failures, `URL failures:\n${failures.join('\n')}`).toEqual([]);
});

test('homepage renders with local assets and main navigation', async ({ page }) => {
  const response = await page.goto('/');
  expect(response && response.ok()).toBeTruthy();
  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('footer')).toBeVisible();
  await expect(page.locator('h1').first()).toBeVisible();
  await expect(page.locator('img[src*="raw.githubusercontent.com"]')).toHaveCount(0);
  await expect(page.locator('img[src*="lovable.app"]')).toHaveCount(0);
});

test('internal links on homepage resolve', async ({ page, request }) => {
  await page.goto('/');
  const hrefs = await page.locator('a[href^="/"]').evaluateAll((links) => [...new Set(links.map((a) => a.getAttribute('href')).filter(Boolean))]);
  const failures = [];
  for (const href of hrefs) {
    const response = await request.get(href);
    if (response.status() >= 400) failures.push(`${href} -> ${response.status()}`);
  }
  console.log(`\nHOMEPAGE LINK REPORT\n${failures.length ? failures.join('\n') : 'All internal links returned <400'}\nEND HOMEPAGE LINK REPORT\n`);
  expect(failures).toEqual([]);
});

test('contact form exposes all required fields and upload control', async ({ page }) => {
  await page.goto('/kontakt/');
  for (const selector of [
    'input[name="vorname"]', 'input[name="nachname"]', 'input[name="telefon"]', 'input[name="email"]',
    'input[name="plz"]', 'input[name="ort"]', 'select[name="leistung"]', 'textarea[name="beschreibung"]',
    'input[name="fotos[]"]', 'input[name="datenschutz"]'
  ]) await expect(page.locator(selector)).toBeVisible();
});

test('contact form accepts an image file before submit', async ({ page }) => {
  await page.goto('/kontakt/');
  const fileInput = page.locator('input[name="fotos[]"]');
  await fileInput.setInputFiles({
    name: 'test-roof.png', mimeType: 'image/png',
    buffer: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=', 'base64'),
  });
  await expect(fileInput).toHaveValue(/test-roof\.png/);
});
