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
  const productTabDom = await page.evaluate(() => {
    setProductUiView('surfaces');
    return [...document.querySelectorAll('#product-ui-projects [id^="grid-"]')].map(grid => [grid.id, grid.children.length]);
  });
  assert.ok(productTabDom.find(([id]) => id === 'grid-product-ui-surfaces')[1] <= 48);
  assert.ok(productTabDom.filter(([id]) => id !== 'grid-product-ui-surfaces').every(([, count]) => count === 0), "Product UI must keep only the active sub-tab grid");
  await page.evaluate(() => setProductUiView('projects'));

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

  const sharedIdentity = await page.evaluate(() => {
    COMMERCIAL_STATE.modules.query='';
    setCommercialView('modules');
    const cards=[...document.querySelectorAll('#grid-commercial-modules .blog-card')];
    cards[1]?.querySelector('.blog-card-head')?.click();
    return { active:[...document.querySelectorAll('#grid-commercial-modules .is-active')].map(card=>card.dataset.cardId), second:cards[1]?.dataset.cardId, grids:[...document.querySelectorAll('#commercial-launches [id^="grid-"]')].map(grid=>[grid.id,grid.children.length]) };
  });
  assert.deepEqual(sharedIdentity.active, [sharedIdentity.second], "cards sharing one preview URL must still have one identity-based highlight");
  assert.ok(sharedIdentity.grids.filter(([id])=>id!=='grid-commercial-modules').every(([,count])=>count===0), "Launches must keep only the active sub-tab grid");

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

  const scopedTabs = await page.evaluate(() => {
    setProductUiView('surfaces');
    setCommercialView('pages');
    setBlogView('blocks');
    const snapshot={ product:document.querySelector('#product-ui-projects [data-product-ui-view].active')?.dataset.productUiView, commercial:document.querySelector('#commercial-launches [data-commercial-view].active')?.dataset.commercialView, blog:document.querySelector('#blog-projects [data-blog-view].active')?.dataset.blogView };
    setCatalogPage('templates',{scroll:false});
    setCatalogPage('blog-projects',{scroll:false});
    return {...snapshot, revisited:document.querySelector('#blog-projects .blog-panel.active')?.id, grids:[...document.querySelectorAll('#blog-projects [id^="grid-"]')].map(grid=>[grid.id,grid.children.length])};
  });
  assert.deepEqual({product:scopedTabs.product,commercial:scopedTabs.commercial,blog:scopedTabs.blog,revisited:scopedTabs.revisited},{product:'surfaces',commercial:'pages',blog:'blocks',revisited:'blog-panel-blocks'},"Blog view changes must stay scoped and survive revisit");
  assert.ok(scopedTabs.grids.filter(([id])=>id!=='grid-blog-blocks').every(([,count])=>count===0), "Blogs must keep only the active sub-tab grid");

  const keyboardSelection = await page.evaluate(() => {
    const cards=[...document.querySelectorAll('#grid-blog-blocks .blog-card')];
    cards[0]?.querySelector('.blog-card-head')?.click();
    const before=document.querySelector('#grid-blog-blocks .is-active')?.dataset.cardId;
    cards[0]?.querySelector('a')?.dispatchEvent(new KeyboardEvent('keydown',{key:' ',bubbles:true}));
    const afterInteractive=document.querySelector('#grid-blog-blocks .is-active')?.dataset.cardId;
    cards[1]?.focus();
    cards[1]?.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));
    return {before,afterInteractive,afterCard:document.querySelector('#grid-blog-blocks .is-active')?.dataset.cardId,second:cards[1]?.dataset.cardId};
  });
  assert.equal(keyboardSelection.afterInteractive,keyboardSelection.before,"keyboard events from nested links must not select the article");
  assert.equal(keyboardSelection.afterCard,keyboardSelection.second,"a focused article must remain keyboard-selectable");

  await page.evaluate(() => { setCatalogPage('templates',{scroll:false}); filter('templates',''); });
  assert.equal(await page.locator('#templates .is-active').count(), 1, "Templates filtering must activate exactly the first result");
  await page.evaluate(() => { setCatalogPage('design-systems',{scroll:false}); filter('design-systems',''); });
  assert.equal(await page.locator('#design-systems .is-active').count(), 1, "Systems filtering must activate exactly the first result");
  await page.evaluate(() => { setCatalogPage('skills',{scroll:false}); filter('skills','no-result-is-possible'); });
  assert.equal(await page.locator('#preview-iframe').getAttribute('src'), '', "zero-result Skills filtering must clear the live preview");

  await page.evaluate(() => filterBlog('sites', 'no-result-is-possible'));
  assert.equal(await page.locator('#grid-blog-sites .blog-card').count(), 0, "empty search must clear cards");
  assert.equal(await page.locator('#preview-shell').getAttribute('aria-hidden'), 'true', "empty search must close preview");
  assert.equal(await page.locator('#preview-iframe').getAttribute('src'), '', "empty search must clear iframe source");
  console.log("Gallery browser smoke passed: hidden pages empty, late matches visible, preview synchronized.");
} finally {
  await browser.close();
}
