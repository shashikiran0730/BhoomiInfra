import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="section-cta">
      <div className="cta-card">
        <h2>Chat with us and book a site visit</h2>
        <p>Reach out to our team to chat, schedule a site visit, or request a free quote. We’ll get back to you quickly.</p>
        <div className="cta-actions">
          <Link href="/contact" className="button">
            <span className="button-icon">💬</span>
            Chat with us
          </Link>
          <Link href="/contact" className="button button-secondary">
            <span className="button-icon">📍</span>
            Book a Site Visit
          </Link>
        </div>
      </div>
    </section>
  );
}
