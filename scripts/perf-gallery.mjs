import assert from "node:assert/strict";

const baseUrl = (process.env.OD_GALLERY_BASE_URL || "http://127.0.0.1:8765").replace(/\/$/, "");
const moduleName = process.env.OD_PLAYWRIGHT_MODULE || "playwright";
const { chromium } = await import(moduleName);
const executablePath = process.env.OD_CHROMIUM_EXECUTABLE;
const browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const cdp = await page.context().newCDPSession(page);
await cdp.send('Network.enable');
await cdp.send('Network.emulateNetworkConditions', {
  offline: false,
  latency: 150,
  downloadThroughput: 200_000,
  uploadThroughput: 90_000,
  connectionType: 'cellular4g',
});
await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
await page.addInitScript(() => {
  window.__odPerf = { cls: 0, lcp: 0, events: [] };
  new PerformanceObserver(list => {
    for (const entry of list.getEntries()) if (!entry.hadRecentInput) window.__odPerf.cls += entry.value;
  }).observe({ type: 'layout-shift', buffered: true });
  new PerformanceObserver(list => {
    const entries = list.getEntries();
    const latest = entries[entries.length - 1];
    if (latest) window.__odPerf.lcp = latest.renderTime || latest.loadTime || latest.startTime;
  }).observe({ type: 'largest-contentful-paint', buffered: true });
  try {
    new PerformanceObserver(list => {
      for (const entry of list.getEntries()) window.__odPerf.events.push(entry.duration);
    }).observe({ type: 'event', buffered: true, durationThreshold: 16 });
  } catch {}
});

try {
  await page.goto(`${baseUrl}/index.html#templates`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1_000);
  const firstCard = page.locator('#templates [data-preview]:not([data-preview=""])').first();
  await firstCard.click();
  await page.waitForTimeout(250);
  const metrics = await page.evaluate(() => ({
    ...window.__odPerf,
    iframeCount: document.querySelectorAll('iframe').length,
    cardCount: document.querySelectorAll('.catalog-page.active [data-preview]').length,
  }));
  const maxEvent = Math.max(0, ...metrics.events);
  console.log(JSON.stringify({ lcp: metrics.lcp, cls: metrics.cls, maxEvent, iframeCount: metrics.iframeCount, cardCount: metrics.cardCount }));
  assert.ok(metrics.lcp <= 2_500, `LCP ${metrics.lcp.toFixed(1)}ms exceeds 2500ms`);
  assert.ok(metrics.cls <= .1, `CLS ${metrics.cls.toFixed(4)} exceeds 0.1`);
  assert.ok(maxEvent <= 200, `event duration ${maxEvent.toFixed(1)}ms exceeds 200ms`);
  assert.equal(metrics.iframeCount, 1, 'Gallery must keep exactly one iframe');
  assert.ok(metrics.cardCount <= 48, `active page rendered ${metrics.cardCount} cards`);
  console.log('Gallery slow-4G/4x-CPU performance budgets passed.');
} finally {
  await browser.close();
}
