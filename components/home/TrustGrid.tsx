import { trustPoints } from "./homeData";

export default function TrustGrid() {
  return (
    <section className="section-trust">
      <div className="section-heading">
        <span>WHY CHOOSE US</span>
        <h2>Why Choose Bhoomi Infra</h2>
        <p>
          At Bhoomi Infra, every project is built with integrity, premium craftsmanship,
          and complete transparency. We don't just build apartments—we create homes
          that inspire trust, comfort, and lasting value.
        </p>
      </div>

      <div className="cards">
        {trustPoints.map((point) => (
          <article key={point.title} className="card">
            <div className="icon">{point.icon}</div>
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
