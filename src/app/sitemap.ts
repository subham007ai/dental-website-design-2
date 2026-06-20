import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://utkaldentalcare.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/patient-education', '/contact'];
  const now = new Date();
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
