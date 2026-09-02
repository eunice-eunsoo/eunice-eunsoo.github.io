import { useState } from "react";
import fullMenuTitle from "../assets/full_menu.png";

const filters = ["all", "data", "graphics", "writing", "video", "photo"];

function FilterBar({ activeFilter, onChange }) {
  return (
    <div className="filter-bar" aria-label="Filter projects">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={activeFilter === filter ? "is-active" : ""}
          onClick={() => onChange(filter)}
          aria-pressed={activeFilter === filter}
        >
          {filter[0].toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

function ProjectArchiveRow({ project, index }) {
  return (
    <article className="archive-row">
      <div
        className={`archive-thumb${
          project.image ? " archive-thumb--image" : ""
        }`}
        aria-label={project.image ? undefined : "Thumbnail placeholder"}
      >
        {project.image ? (
          <img src={project.image} alt={project.imageAlt || ""} />
        ) : (
          <span>{String(index + 1).padStart(2, "0")}</span>
        )}
      </div>
      <div className="archive-copy">
        <h3>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>
        <p>{project.description}</p>
        <ul className="tags" aria-label="Skills and tools">
          {project.tools.map((tool, toolIndex) =>
            project.tools.indexOf(tool) === toolIndex ? (
              <li key={tool}>{tool}</li>
            ) : null
          )}
        </ul>
      </div>
    </article>
  );
}

function ProjectArchive({ projects }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleProjects = projects.filter(
    (project) =>
      activeFilter === "all" || project.categories.includes(activeFilter)
  );

  return (
    <section className="archive" id="archive">
      <div className="content-container">
        <div className="archive-heading">
          <div className="archive-heading-copy">
            <h2 className="section-heading">
              <img
                className="section-title-image section-title-image--archive"
                src={fullMenuTitle}
                alt="Full Menu"
              />
            </h2>
            <p className="featured-subtitle">Everything else!</p>
          </div>
          <FilterBar activeFilter={activeFilter} onChange={setActiveFilter} />
        </div>
        <div className="archive-list" aria-live="polite">
          {visibleProjects.map((project, index) => (
            <ProjectArchiveRow
              project={project}
              index={index}
              key={project.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectArchive;
