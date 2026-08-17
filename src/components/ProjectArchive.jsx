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
      <div className="archive-thumb" aria-label="Thumbnail placeholder"><span>{String(index + 1).padStart(2, '0')}</span><small>Image</small></div>
      <div className="archive-copy">
        <div>
          <p className="archive-type">{project.categories.join(' / ')}</p>
          <h3><a href={project.link}>{project.title}</a></h3>
        </div>
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
          <div><p className="eyebrow">More work / assorted formats</p><h2>Everything <em>else</em></h2></div>
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
