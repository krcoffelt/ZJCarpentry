import { ReviewCard } from "@/components/review-card";
import { buildMetadata } from "@/lib/seo";
import { reviews } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Reviews",
  description:
    "Review-driven trust signals for Kansas City deck, remodel, and interior carpentry homeowners.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <section className="section">
      <div className="shell lead-grid">
        <div>
          <p className="eyebrow">Word of Mouth</p>
          <h1 className="two-line-lock">
            <span>Kansas City</span>
            <span>Homeowner Reviews</span>
          </h1>
        </div>
        <p>
          Reliability, clear communication, professionalism, and visible project
          results are stronger than vague claims about quality.
        </p>
      </div>
      <div className="shell review-grid">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </div>
    </section>
  );
}
