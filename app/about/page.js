import { getSiteInfo } from "../../lib/db";

export default function AboutPage() {
  const info = getSiteInfo();

  return (
    <main className="page-shell">
      <section className="section-intro">
        <h1>About Bhoomi Infra Developers</h1>
        <p>
          {info.description}
        </p>
      </section>

      <section className="section-projects">
        <div className="section-heading">
          <h2>Why customers choose us</h2>
          <p>We combine practical construction expertise with personalized planning for every project.</p>
        </div>

        <div className="feature-grid">
          <article>
            <h3>Transparent process</h3>
            <p>We keep you informed at every milestone from estimate to handover.</p>
          </article>
          <article>
            <h3>Safety first</h3>
            <p>Every site follows strong safety procedures, quality checks, and clean working practices.</p>
          </article>
          <article>
            <h3>Design-led execution</h3>
            <p>Our teams deliver beautiful residential and commercial spaces that fit your vision.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
