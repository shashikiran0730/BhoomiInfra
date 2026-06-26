"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactTime: "",
    budget: "",
    projects: [],
    message: "",
  });

  const projectOptions = [
    "Bhoomi The Peak",
    "Bhoomi Heights",
    "Bhoomi Elite",
    "Bhoomi Skyline",
    "Upcoming Projects",
    "Villa Projects",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        projects: checked
          ? [...prev.projects, value]
          : prev.projects.filter((p) => p !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("/api/booking", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setStatus("Your booking request has been received. We will contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        contactTime: "",
        budget: "",
        projects: [],
        message: "",
      });
    } else {
      setStatus("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-card">
        <div className="form-header">
          <div className="small-title">BOOK A SITE VISIT</div>
          <h1>Let's Build Your Dream Home</h1>
          <p className="form-subtitle">
            Tell us about your dream home and preferred contact time. Our team will contact you shortly and schedule a personalized site visit.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-grid">
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="contactTime">Preferred Contact Time</label>
              <select
                id="contactTime"
                name="contactTime"
                value={formData.contactTime}
                onChange={handleChange}
                required
              >
                <option value="">Select a time</option>
                <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
              </select>
            </div>

            <div className="input-group full">
              <label htmlFor="budget">Budget</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
              >
                <option value="">Select Budget</option>
                <option value="₹40 - ₹60 Lakhs">₹40 - ₹60 Lakhs</option>
                <option value="₹60 - ₹80 Lakhs">₹60 - ₹80 Lakhs</option>
                <option value="₹80 Lakhs - ₹1 Crore">₹80 Lakhs - ₹1 Crore</option>
                <option value="Above ₹1 Crore">Above ₹1 Crore</option>
              </select>
            </div>

            <div className="input-group full">
              <label>Projects Interested In</label>
              <div className="checkbox-grid">
                {projectOptions.map((project) => (
                  <label key={project} className="checkbox">
                    <input
                      type="checkbox"
                      name="projects"
                      value={project}
                      checked={formData.projects.includes(project)}
                      onChange={handleChange}
                    />
                    {project}
                  </label>
                ))}
              </div>
            </div>

            <div className="input-group full">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your preferred location, timeline, budget and any additional requirements..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Book My Site Visit →
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </div>
  );
}
