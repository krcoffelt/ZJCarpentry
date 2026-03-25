type ReviewCardProps = {
  name: string;
  quote: string;
};

export function ReviewCard({ name, quote }: ReviewCardProps) {
  return (
    <article className="review-card">
      <p>{quote}</p>
      <strong>{name}</strong>
    </article>
  );
}
