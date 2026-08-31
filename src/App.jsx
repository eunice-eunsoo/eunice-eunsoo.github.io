import { useRef, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import IntroSection from './components/IntroSection'
import FeaturedProject from './components/FeaturedProject'
import FeaturedProjectModal from './components/FeaturedProjectModal'
import ProjectArchive from './components/ProjectArchive'
import { archiveProjects, featuredProjects } from './data/projects'
import featuredTitle from './assets/featured.png'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const projectTriggerRef = useRef(null)

  const openProject = (project, trigger) => {
    projectTriggerRef.current = trigger
    setSelectedProject(project)
  }

  const closeProject = () => {
    setSelectedProject(null)
    requestAnimationFrame(() => projectTriggerRef.current?.focus())
  }

  return (
    <div className="site-shell">
      <main>
        <IntroSection />
        <section className="selected-work" id="featured" aria-labelledby="selected-work-title">
          <div className="content-container">
            <h2 className="section-heading" id="selected-work-title">
              <img
                className="section-title-image section-title-image--featured"
                src={featuredTitle}
                alt="Chef's Specials"
              />
            </h2>
            <p className = 'featured-subtitle'> Three projects I'm especially proud of! </p>
            <div className="featured-grid">
              {featuredProjects.map((project) => (
                <FeaturedProject key={project.id} project={project} onSelect={openProject} />
              ))}
            </div>
          </div>
        </section>
        <ProjectArchive projects={archiveProjects} />
      </main>
      <Footer />
      {selectedProject && (
        <FeaturedProjectModal project={selectedProject} onClosed={closeProject} />
      )}
    </div>
  )
}

export default App
