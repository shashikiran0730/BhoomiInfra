import { serviceItems } from "./homeData";

export default function ServiceGrid() {
  return (
    <section className="section-services">
      <div className="section-heading">
        <p className="eyebrow">Services Available</p>
        <h2>Construction expertise for every stage of your project.</h2>
      </div>
      <div className="service-grid service-card-grid">
        {serviceItems.map((service) => (
          <article key={service.title}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
