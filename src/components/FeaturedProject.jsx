function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <div className="project-visual project-visual--image">
        <img src={project.image} alt={project.imageAlt || ''} />
      </div>
    )
  }

  return (
    <div className="project-visual" aria-label="Project visual placeholder">
      <span className="visual-label">Project visual / replace</span>
      <span className="visual-number">{project.projectNumber}</span>
      <div className="visual-mark" />
    </div>
  )
}

function ProjectDetails({ project }) {
  return (
    <div className="project-copy">
      <div className="project-kicker"><span>{project.projectNumber}</span><span>{project.categories.join(' / ')}</span></div>
      <h2>{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <dl className="project-meta">
        <div><dt>Role</dt><dd>{project.role}</dd></div>
        <div><dt>Tools / skills</dt><dd>{project.tools.join(', ')}</dd></div>
      </dl>
      <a className="text-link" href={project.link}>View project <span aria-hidden="true">↗</span></a>
    </div>
  )
}

function FeaturedProject({ project, layout }) {
  return (
    <article className={`featured-project featured-project--${layout}`}>
      <div className="content-container featured-project-inner">
        <ProjectVisual project={project} />
        <ProjectDetails project={project} />
      </div>
    </article>
  )
}

export default FeaturedProject
