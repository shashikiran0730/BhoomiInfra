import { serviceItems } from "./homeData";

export default function ServiceGrid({ showHeading = true }) {
  return (
    <section className="section-services">
      {showHeading && (
        <div className="section-heading">
          <p className="eyebrow">Services Available</p>
          <h2>Construction expertise for every stage of your project.</h2>
        </div>
      )}
      <div className="service-grid service-card-grid">
        {serviceItems.map((service) => (
          <article key={service.title} className="row-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
