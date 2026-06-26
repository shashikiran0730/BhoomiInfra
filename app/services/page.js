import ServiceGrid from "../../components/home/ServiceGrid";

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <section className="section-intro">
        <h1>Services Available</h1>
        <p>
          Discover the full range of construction services we offer, from planning and
          site execution to renovation and interior finishing.
        </p>
      </section>

      <ServiceGrid showHeading={false} />
    </main>
  );
}
