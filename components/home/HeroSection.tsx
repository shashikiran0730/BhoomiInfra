import Link from "next/link";
import { statistics } from "./homeData";

export default function HeroSection() {
  return (
    <header className="hero hero-feature hero-bg">
      <div className="hero-copy hero-copy-feature">
        <p className="brand-title">BHOOMIINFRA DEVELOPERS</p>
        <p className="eyebrow hero-eyebrow-muted">Where Luxury Meets Lifestyle</p>
        <p>
          Discover premium apartments, villas, and residential communities crafted for
          modern living.
        </p>

        <div className="hero-stats">
          {statistics.slice(0, 4).map((item) => (
            <div key={item.label} className="hero-stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions hero-actions-feature">
          <Link href="/projects" className="button button-primary-large">
            View Our Projects
          </Link>
        </div>
      </div>

    </header>
  );
}
