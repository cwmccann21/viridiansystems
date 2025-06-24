const { SitemapStream, streamToPromise } = require('sitemap');
const { writeFileSync } = require('fs');
const path = require('path');

const siteUrl = 'https://viridiansystems.org';

// List all static routes here. Add more as your site grows.
const routes = [
  '/',
  '/autoflow',
  '/roofflow',
  '/lawnflow',
  '/plumbflow',
  '/privacy-policy',
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: siteUrl });
  routes.forEach(route => sitemap.write({ url: route, changefreq: 'monthly', priority: 0.8 }));
  sitemap.end();
  const data = await streamToPromise(sitemap);
  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  try {
    writeFileSync(sitemapPath, data);
    console.log('sitemap.xml generated at', sitemapPath);
  } catch (err) {
    console.error('Error writing sitemap.xml:', err);
  }
}

function generateRobotsTxt() {
  const robotsContent = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`;
  const robotsPath = path.join(__dirname, 'public', 'robots.txt');
  try {
    writeFileSync(robotsPath, robotsContent);
    console.log('robots.txt generated at', robotsPath);
  } catch (err) {
    console.error('Error writing robots.txt:', err);
  }
}

(async () => {
  await generateSitemap();
  generateRobotsTxt();
})(); 