"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries());

    const response = await fetch("/api/booking", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setStatus("Your booking request has been received. We will contact you soon.");
      event.currentTarget.reset();
    } else {
      setStatus("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <section className="booking-card">
      <h2>Book a site visit</h2>
      <p>Tell us your project details and preferred contact time. Our team will follow up quickly.</p>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" required />
        </label>
        <label>
          Project type
          <input name="projectType" type="text" placeholder="Home, renovation, commercial" required />
        </label>
        <label>
          Message
          <textarea name="message" placeholder="Share your location, timeline, and goals." required />
        </label>
        <button type="submit" className="button">
          Send request
        </button>
      </form>

      {status ? <p style={{ color: "#d1fae5", marginTop: 16 }}>{status}</p> : null}
    </section>
  );
}
