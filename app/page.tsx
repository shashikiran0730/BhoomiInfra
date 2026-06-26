import { getSiteInfo, getProjects } from "../lib/db";
import HeroSection from "../components/home/HeroSection";
import TrustGrid from "../components/home/TrustGrid";
import AmenitiesSection from "../components/home/AmenitiesSection";
import ProjectsSection from "../components/home/ProjectsSection";
import TimelineSection from "../components/home/TimelineSection";
import GallerySection from "../components/home/GallerySection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CtaSection from "../components/home/CtaSection";

const trustPoints = [
  "Quality Construction",
  "Transparent Pricing",
  "On-Time Delivery",
  "Premium Materials",
  "Experienced Engineers",
  "Regular Updates",
  "Customer First Approach",
  "Legal Compliance",
];

const timelineSteps = [
  { icon: "🗣️", label: "Consultation" },
  { icon: "📍", label: "Site Visit" },
  { icon: "🧭", label: "Planning" },
  { icon: "🖊️", label: "Design" },
  { icon: "💰", label: "Estimation" },
  { icon: "🏗️", label: "Construction" },
  { icon: "🔎", label: "Quality Checks" },
  { icon: "🎉", label: "Final Handover" },
];

const testimonials = [
  {
    quote: "Bhoomi Infra delivered our apartment with exceptional quality and communication.",
    author: "Priya Sharma",
    role: "Homeowner",
  },
  {
    quote: "The project was completed on schedule and the site team was professional throughout.",
    author: "Ravi Patel",
    role: "Business Owner",
  },
];

export default function HomePage() {
  const info = getSiteInfo();
  const projects = getProjects();

  return (
    <main className="page-shell">
      <HeroSection />
      <TrustGrid />
      <AmenitiesSection />
      <ProjectsSection projects={projects} />
      <TimelineSection />
      <GallerySection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
