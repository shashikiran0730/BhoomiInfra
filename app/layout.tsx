import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Bhoomi Infra Developers",
  description: "Professional construction and infrastructure development services.",
};

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-brand">
        <img className="logo-image" src="/logo.svg" alt="Bhoomi Infra Developers logo" />
        <div>
          <p>Bhoomi Infra</p>
          <small>Developers</small>
        </div>
      </div>
      <nav className="site-nav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
