export default function AboutOverview({ info }) {
  return (
    <section className="section-about">
      <div className="section-heading">
        <p className="eyebrow">About Bhoomi Infra</p>
        <h2>We build trusted structures that stand the test of time.</h2>
      </div>
      <div className="about-grid">
        <div>
          <p>{info.description}</p>
        </div>
        <div className="about-cards">
          <article>
            <h3>Our Mission</h3>
            <p>Deliver premium construction services with dependable quality and open communication.</p>
          </article>
          <article>
            <h3>Our Vision</h3>
            <p>To become the go-to developer for local construction with a reputation built on trust.</p>
          </article>
          <article>
            <h3>Our Values</h3>
            <p>Customer-first service, skilled execution, legal compliance, and after-sales support.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
