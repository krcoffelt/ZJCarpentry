import type { Metadata } from "next";
import "./globals.css";
import { MobileCta } from "@/components/mobile-cta";
import { SchemaScript } from "@/components/schema-script";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildMetadata, localBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kansas City Deck Builder and Remodeling Contractor",
  description:
    "ZJ Carpentry builds decks, remodels interiors, and handles practical carpentry projects for homeowners in Kansas City and nearby suburbs.",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="video" href="/videos/ZJCarpentry_SlowMo.mp4" type="video/mp4" />
      </head>
      <body>
        <SchemaScript data={localBusinessSchema()} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileCta />
      </body>
    </html>
  );
}
