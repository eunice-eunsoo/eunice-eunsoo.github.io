function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <div className="project-visual project-visual--image">
        <img src={project.image} alt={project.imageAlt || ''} />
      </div>
    )
  }

  return (
    <div className="project-visual project-visual--placeholder" aria-label="Project visual placeholder">
      <span>Project visual</span>
    </div>
  )
}

function FeaturedProject({ project, onSelect }) {
  return (
    <article className="featured-project">
      <button
        className="featured-project-trigger"
        type="button"
        aria-label={`Open details for ${project.title}`}
        onClick={(event) => onSelect(project, event.currentTarget)}
      />
      <ProjectVisual project={project} />
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="tags" aria-label="Skills and tools">
        {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
      </ul>
    </article>
  )
}

export default FeaturedProject
