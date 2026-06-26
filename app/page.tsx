import { getSiteInfo, getProjects } from "../lib/db";
import HeroSection from "../components/home/HeroSection";
import CalloutBar from "../components/home/CalloutBar";
import AboutOverview from "../components/home/AboutOverview";
import TrustGrid from "../components/home/TrustGrid";
import ServiceGrid from "../components/home/ServiceGrid";
import ProjectsSection from "../components/home/ProjectsSection";
import TimelineSection from "../components/home/TimelineSection";
import GallerySection from "../components/home/GallerySection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CtaSection from "../components/home/CtaSection";

const serviceItems = [
  {
    icon: "🧭",
    title: "Planning",
    description: "Smart planning for better living.",
  },
  {
    icon: "🏗️",
    title: "Construction",
    description: "Quality construction built to last.",
  },
  {
    icon: "🎨",
    title: "Renovation",
    description: "Transforming spaces with care.",
  },
  {
    icon: "🛋️",
    title: "Interior",
    description: "Designing interiors that inspire.",
  },
];

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
      <CalloutBar />
      <AboutOverview info={info} />
      <TrustGrid />
      <ServiceGrid />
      <ProjectsSection projects={projects} />
      <TimelineSection />
      <GallerySection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
