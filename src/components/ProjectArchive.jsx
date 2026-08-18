import { useState } from 'react'

const filters = ['all', 'tools', 'data', 'print', 'video', 'photo']

function FilterBar({ activeFilter, onChange }) {
  return (
    <div className="filter-bar" aria-label="Filter projects">
      {filters.map((filter) => (
        <button key={filter} type="button" className={activeFilter === filter ? 'is-active' : ''} onClick={() => onChange(filter)} aria-pressed={activeFilter === filter}>
          {filter[0].toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  )
}

function ProjectArchiveRow({ project, index }) {
  return (
    <article className="archive-row">
      <div className={`archive-thumb${project.image ? ' archive-thumb--image' : ''}`} aria-label={project.image ? undefined : 'Thumbnail placeholder'}>
        {project.image
          ? <img src={project.image} alt={project.imageAlt || ''} />
          : <span>{String(index + 1).padStart(2, '0')}</span>}
      </div>
      <div className="archive-copy">
        <h3><a href={project.link}>{project.title}</a></h3>
        <p>{project.description}</p>
        <ul className="tags" aria-label="Skills and tools">{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
      </div>
    </article>
  )
}

function ProjectArchive({ projects }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const visibleProjects = activeFilter === 'all' ? projects : projects.filter((project) => project.categories.includes(activeFilter))

  return (
    <section className="archive" id="archive">
      <div className="content-container">
        <div className="archive-heading">
          <h2 className="section-heading">Full Menu</h2>
          <p className='featured-project h3'>Everything else.</p>
          <FilterBar activeFilter={activeFilter} onChange={setActiveFilter} />
        </div>
        <div className="archive-list" aria-live="polite">
          {visibleProjects.map((project, index) => <ProjectArchiveRow project={project} index={index} key={project.id} />)}
        </div>
      </div>
    </section>
  )
}

export default ProjectArchive
