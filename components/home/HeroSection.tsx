import Link from "next/link";
import { statistics } from "./homeData";

export default function HeroSection() {
  return (
    <header className="hero hero-feature hero-bg">
      <div className="hero-copy hero-copy-feature">
        <p className="eyebrow hero-eyebrow-muted">Where Luxury Meets Lifestyle</p>
        <h1>Find your dream home today</h1>
        <p>
          Discover premium apartments, villas, and residential communities crafted for
          modern living.
        </p>

        <div className="hero-actions hero-actions-feature">
          <Link href="/projects" className="button button-primary-large">
            View Our Projects
          </Link>
        </div>

        <div className="hero-stats">
          {statistics.slice(0, 4).map((item) => (
            <div key={item.label} className="hero-stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-image hero-image-feature">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
          alt="Premium construction and architecture" 
        />
        <div className="hero-overlay">
          <div>
            <p>Featured project showcase</p>
            <strong>Trustworthy execution from foundation to finish</strong>
          </div>
        </div>
      </div>
    </header>
  );
}
