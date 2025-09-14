/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.dlowuganda.shop',
  generateRobotsTxt: false, // We already have a custom robots.txt
  generateIndexSitemap: false,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin/*', '/private/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.dlowuganda.shop/sitemap.xml',
    ],
  },
} 