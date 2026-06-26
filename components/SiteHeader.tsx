"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="site-header header-branding">
      <nav className="site-nav">
        <Link 
          href="/" 
          className={isActive("/") ? "nav-link-active" : ""}
        >
          Home
        </Link>
        <Link 
          href="/projects"
          className={isActive("/projects") ? "nav-link-active" : ""}
        >
          Projects
        </Link>
        <Link 
          href="/services"
          className={isActive("/services") ? "nav-link-active" : ""}
        >
          Services
        </Link>
        <Link 
          href="/about"
          className={isActive("/about") ? "nav-link-active" : ""}
        >
          About
        </Link>
        <Link 
          href="/contact"
          className={isActive("/contact") ? "nav-link-active" : ""}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
