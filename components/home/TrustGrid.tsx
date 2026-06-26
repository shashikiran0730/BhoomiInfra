import { trustPoints } from "./homeData";

export default function TrustGrid() {
  return (
    <section className="section-trust">
      <div className="section-heading">
        <p className="eyebrow">Why Choose Bhoomi Infra</p>
        <h2>Construction services designed for clarity, quality, and confidence.</h2>
      </div>
      <div className="trust-grid">
        {trustPoints.map((point) => (
          <article key={point}>
            <h3>{point}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
