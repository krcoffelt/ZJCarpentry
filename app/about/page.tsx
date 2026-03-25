import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "About ZJ Carpentry and the services offered across Kansas City and nearby suburbs.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="section">
      <div className="shell page-hero">
        <div>
          <p className="eyebrow">About</p>
          <h1 className="two-line-lock">
            <span>Kansas City Contractor</span>
            <span>For Decks And Remodels</span>
          </h1>
          <p className="hero-copy">
            ZJ Carpentry focuses on decks, remodels, and interior carpentry for
            homeowners who want clear communication and a straightforward quote process.
          </p>
        </div>
        <div className="contact-block stack">
          <p>
            Work includes deck builds and rebuilds, remodel updates, trim,
            feature walls, and interior finish work.
          </p>
          <p>
            Service covers Kansas City and nearby suburbs including Overland
            Park, Leawood, Olathe, and Lee&apos;s Summit.
          </p>
        </div>
      </div>
    </section>
  );
}
