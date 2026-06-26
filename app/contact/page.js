import ContactForm from "../../components/ContactForm";
import { getContactInfo, getMapLocation } from "../../lib/db";

export default function ContactPage() {
  const contact = getContactInfo();
  const map = getMapLocation();

  return (
    <main className="page-shell">
      <ContactForm />

      <div className="contact-info-section">
        <div className="contact-info-grid">
          <div className="info-card">
            <h3>Reach us</h3>
            <p><strong>{contact.company}</strong></p>
            <p>{contact.address}</p>
            <p>
              <strong>Phone:</strong> <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </p>
            <p>
              <strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>

          <div className="info-card map-card">
            <h3>Our Location</h3>
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
        </div>
      </div>
    </main>
  );
}
