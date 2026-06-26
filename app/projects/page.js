import Link from "next/link";
import { getProjects } from "../../lib/db";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="page-shell">
      <section className="section-projects">
        <div className="section-heading">
          <h1>Live Projects</h1>
          <p>Current construction works that reflect our capability, planning, and site execution.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-label">{project.status}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-meta">{project.location}</p>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 32 }}>
          <Link href="/contact" className="button">
            Book your consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
