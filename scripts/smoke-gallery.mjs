import assert from "node:assert/strict";

const baseUrl = (process.env.OD_GALLERY_BASE_URL || "http://127.0.0.1:8765").replace(/\/$/, "");
const moduleName = process.env.OD_PLAYWRIGHT_MODULE || "playwright";
const { chromium } = await import(moduleName);
const executablePath = process.env.OD_CHROMIUM_EXECUTABLE;
const browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

try {
  await page.goto(`${baseUrl}/index.html#templates`, { waitUntil: "domcontentloaded" });
  assert.ok(await page.locator('#templates [data-preview]').count() <= 48, "active page must stay within its render window");

  await page.evaluate(() => setCatalogPage('product-ui-projects', { scroll: false }));
  assert.equal(await page.locator('#templates [data-preview]').count(), 0, "hidden Templates page must release its cards");

  const productMatches = await page.evaluate(() => {
    PRODUCT_UI_PROJECTS.projects.splice(0, PRODUCT_UI_PROJECTS.projects.length, ...Array.from({ length: 60 }, (_, index) => ({
      id: `synthetic-product-${index}`, projectName: `${index >= 55 ? 'Needle' : 'Other'} ${index}`,
      projectType: 'web-app', sector: 'software', captureDepth: 'suite', why: 'test',
      surfaceCount: 1, flowCount: 1, stateCount: 1, preview: 'design-templates/product-ui-projects/example.html'
    })));
    PRODUCT_UI_STATE.projects.query = 'needle';
    renderProductUiView('projects', PRODUCT_UI_PROJECTS.projects);
    return document.querySelectorAll('#grid-product-ui-projects .blog-card').length;
  });
  assert.equal(productMatches, 5, "Product UI must find matches beyond the first 48 source items");
  await page.waitForFunction(() => document.querySelector('#preview-title')?.textContent === 'Needle 55');

  const commercialMatches = await page.evaluate(() => {
    setCatalogPage('commercial-launches', { scroll: false });
    COMMERCIAL_LAUNCHES.brands.splice(0, COMMERCIAL_LAUNCHES.brands.length, ...Array.from({ length: 60 }, (_, index) => ({
      id: `synthetic-launch-${index}`, brandName: `${index >= 57 ? 'Needle' : 'Other'} ${index}`,
      pageTitle: 'Launch', pageUrl: 'https://example.com', pageType: 'landing', sector: 'software',
      why: 'test', preview: 'design-templates/commercial-product-launches/example.html'
    })));
    COMMERCIAL_STATE.brands.query = 'needle';
    renderCommercialView('brands', COMMERCIAL_LAUNCHES.brands);
    return document.querySelectorAll('#grid-commercial-brands .blog-card').length;
  });
  assert.equal(commercialMatches, 3, "Launches must find matches beyond the first 48 source items");
  assert.equal(await page.locator('#product-ui-projects [data-preview]').count(), 0, "hidden Product UI page must release its cards");

  const blogMatches = await page.evaluate(() => {
    setCatalogPage('blog-projects', { scroll: false });
    BLOG_PROJECTS.sites.splice(0, BLOG_PROJECTS.sites.length, ...Array.from({ length: 60 }, (_, index) => ({
      id: `synthetic-blog-${index}`, name: `${index >= 58 ? 'Needle' : 'Other'} ${index}`,
      author: 'Test', language: 'English', type: 'personal', group: 'independent', why: 'test',
      url: 'https://example.com', preview: 'design-templates/personal-blog-projects/example.html'
    })));
    BLOG_STATE.sites.query = 'needle';
    renderBlogView('sites', BLOG_PROJECTS.sites);
    return document.querySelectorAll('#grid-blog-sites .blog-card').length;
  });
  assert.equal(blogMatches, 2, "Blogs must find matches beyond the first 48 source items");

  await page.evaluate(() => filterBlog('sites', 'no-result-is-possible'));
  assert.equal(await page.locator('#grid-blog-sites .blog-card').count(), 0, "empty search must clear cards");
  assert.equal(await page.locator('#preview-shell').getAttribute('aria-hidden'), 'true', "empty search must close preview");
  assert.equal(await page.locator('#preview-iframe').getAttribute('src'), '', "empty search must clear iframe source");
  console.log("Gallery browser smoke passed: hidden pages empty, late matches visible, preview synchronized.");
} finally {
  await browser.close();
}
