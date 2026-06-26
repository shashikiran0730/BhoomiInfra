import ContactForm from "../../components/ContactForm";
import { getContactInfo, getMapLocation } from "../../lib/db";

export default function ContactPage() {
  const contact = getContactInfo();
  const map = getMapLocation();

  return (
    <main className="page-shell">
      <section className="section-intro">
        <h1>Let's build your next project</h1>
        <p>Share your requirements and we will schedule a site visit, estimate, and design consultation.</p>
      </section>

      <div className="contact-grid">
        <aside className="contact-card">
          <h2>Reach us</h2>
          <p>{contact.company}</p>
          <p>{contact.address}</p>
          <p>
            <strong>Phone:</strong> {contact.phone}
          </p>
          <p>
            <strong>Email:</strong> {contact.email}
          </p>
          <div className="map-card">
            <h2>Our location</h2>
            <p>{map.label}</p>
            <div className="map-frame">
              <iframe
                title="Bhoomi Infra location"
                src={map.iframe_src}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </aside>

        <ContactForm />
      </div>
    </main>
  );
}
