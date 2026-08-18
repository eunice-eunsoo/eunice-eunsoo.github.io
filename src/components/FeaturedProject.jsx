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

function FeaturedProject({ project }) {
  return (
    <article className="featured-project">
      <a className="project-visual-link" href={project.link} aria-label={`View ${project.title}`}>
        <ProjectVisual project={project} />
      </a>
      <h3><a href={project.link}>{project.title}</a></h3>
      <p className="project-description">{project.description}</p>
      <ul className="tags" aria-label="Skills and tools">
        {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
      </ul>
    </article>
  )
}

export default FeaturedProject
