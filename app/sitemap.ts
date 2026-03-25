import type { MetadataRoute } from "next";
import { areas, company, services } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/projects", "/reviews", "/about", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${company.siteUrl}${route}`,
      lastModified: new Date(),
    })),
    ...services.map((service) => ({
      url: `${company.siteUrl}/services/${service.slug}`,
      lastModified: new Date(),
    })),
    ...areas.map((area) => ({
      url: `${company.siteUrl}/service-areas/${area.slug}`,
      lastModified: new Date(),
    })),
  ];
}
