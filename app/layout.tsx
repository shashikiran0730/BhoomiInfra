import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import "./globals.css";

export const metadata = {
  title: "Bhoomi Infra Developers",
  description: "Professional construction and infrastructure development services.",
};

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col footer-company">
            <h2>BHOOMI INFRA</h2>
            <p className="footer-desc">
              Building luxury apartments that combine timeless architecture,
              premium construction quality, and modern lifestyle. Every project
              is designed with trust, transparency, and excellence to create homes
              that last for generations.
            </p>
            <div className="footer-highlights">
              <div className="footer-item">
                <span>📞</span>
                <div>
                  <h4>Call Us Today</h4>
                  <p>+91 98483 96526</p>
                </div>
              </div>
              <div className="footer-item">
                <span>🛡️</span>
                <div>
                  <h4>Quality Assurance</h4>
                  <p>Premium Materials & Superior Craftsmanship</p>
                </div>
              </div>
              <div className="footer-item">
                <span>⏱️</span>
                <div>
                  <h4>On-Time Delivery</h4>
                  <p>Committed to Timely Project Completion</p>
                </div>
              </div>
              <div className="footer-item">
                <span>🤝</span>
                <div>
                  <h4>Customer Satisfaction</h4>
                  <p>Your Trust Is Our Greatest Achievement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-col footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/services">Amenities</Link></li>
              <li><Link href="/">Gallery</Link></li>
              <li><Link href="/">Construction Updates</Link></li>
              <li><Link href="/">Testimonials</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col footer-services">
            <h3>Our Services</h3>
            <ul>
              <li>Luxury Apartments</li>
              <li>Premium Villas</li>
              <li>Independent Houses</li>
              <li>Commercial Buildings</li>
              <li>Interior Design</li>
              <li>Turnkey Construction</li>
              <li>Project Management</li>
              <li>Architecture Planning</li>
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h3>Contact Information</h3>
            <p>📍 Karimnagar, Telangana</p>
            <p>📞 +91 98483 96526</p>
            <p>✉️ info@bhoomiinfra.com</p>
            <p>🕒 Mon - Sat : 9:00 AM - 6:00 PM</p>
            <div className="footer-social">
              <Link href="#">Facebook</Link>
              <Link href="#">Instagram</Link>
              <Link href="#">YouTube</Link>
              <Link href="#">LinkedIn</Link>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <p>© 2026 Bhoomi Infra Developers. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link href="#">Privacy Policy</Link>
            <span>|</span>
            <Link href="#">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
