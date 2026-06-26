import { timelineSteps } from "./homeData";

export default function TimelineSection() {
  return (
    <section className="section-timeline">
      <div className="section-heading">
        <p className="eyebrow">Our Process</p>
        <h2>Construction timeline that keeps you informed.</h2>
      </div>
      <div className="timeline-grid">
        {timelineSteps.map((step, index) => (
          <article key={step.label} className={index < 5 ? "timeline-complete" : "timeline-pending"}>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.label}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
