import { timelineSteps } from "./homeData";

export default function TimelineSection() {
  return (
    <section className="section-timeline">
      <div className="section-heading">
        <p className="eyebrow">Our Process</p>
        <h2>Construction timeline that keeps you informed.</h2>
      </div>
      <div className="timeline-row">
        {timelineSteps.map((step) => (
          <div key={step.label} className="timeline-step">
            <div className="step-icon">{step.icon}</div>
            <strong>{step.label}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
