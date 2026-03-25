type ReviewCardProps = {
  name: string;
  quote: string;
};

export function ReviewCard({ name, quote }: ReviewCardProps) {
  return (
    <article className="review-card">
      <div className="review-topline">
        <span className="review-badge">KC Trust Signal</span>
        <p className="quote-mark">“</p>
      </div>
      <p>{quote}</p>
      <strong>{name}</strong>
    </article>
  );
}
