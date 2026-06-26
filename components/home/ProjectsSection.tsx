import Image from "next/image";

const projectGroups = [
  { key: "Launched Projects", label: "Completed / Launched", filter: (status) => /completed|launched/i.test(status) },
  { key: "In Progress", label: "In Progress", filter: (status) => /in progress/i.test(status) },
  { key: "Site Survey", label: "Site Survey", filter: (status) => /site survey/i.test(status) },
];

const heroImages = [
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
];

export default function ProjectsSection({ projects }) {
  return (
    <section className="section-projects">
      <div className="section-heading">
        <p className="eyebrow">Project Categories</p>
        <h2>Launched, in-progress, and survey stages.</h2>
        <p>Explore our current work and upcoming launches in separate categories.</p>
      </div>

      {projectGroups.map((group) => {
        const groupProjects = projects.filter((project) => group.filter(project.status));
        if (groupProjects.length === 0) return null;

        return (
          <div key={group.key} className="project-category">
            <div className="project-category-heading">
              <p className="eyebrow">{group.label}</p>
              <h3>{group.key}</h3>
            </div>
            <div className="project-grid">
              {groupProjects.map((project, index) => {
                const progress = /in progress/i.test(project.status) ? 68 : /site survey/i.test(project.status) ? 24 : 100;
                return (
                  <article key={project.id} className="project-card project-card-large">
                    <div className="project-card-media">
                      <img src={heroImages[index % heroImages.length]} alt={project.title} />
                    </div>
                    <div className="project-card-body">
                      <div className="project-label">{project.status}</div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <p className="project-meta">{project.location}</p>
                      <div className="project-progress">
                        <div className="project-progress-info">
                          <span>{progress === 100 ? "Completed" : `${progress}% Complete`}</span>
                          <strong>{progress}%</strong>
                        </div>
                        <div className="progress-track">
                          <div className="progress-fill" style={{ width: `${progress}%` }} />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
