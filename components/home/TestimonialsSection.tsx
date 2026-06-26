import { testimonials } from "./homeData";

export default function TestimonialsSection() {
  return (
    <section className="section-testimonials">
      <div className="section-heading">
        <p className="eyebrow">Testimonials</p>
        <h2>What our clients say about us.</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article key={item.author}>
            <p>“{item.quote}”</p>
            <strong>{item.author}</strong>
            <span>{item.role}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
