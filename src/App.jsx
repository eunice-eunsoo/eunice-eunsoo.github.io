import './App.css'
import Footer from './components/Footer'
import IntroSection from './components/IntroSection'
import FeaturedProject from './components/FeaturedProject'
import ProjectArchive from './components/ProjectArchive'
import { archiveProjects, featuredProjects } from './data/projects'

function App() {
  return (
    <div className="site-shell">
      <main>
        <IntroSection />
        <section className="selected-work" id="featured" aria-labelledby="selected-work-title">
          <div className="content-container">
            <h2 className="section-heading" id="selected-work-title">Chef's Specials</h2>
            <p className = 'featured-project h3'> Three projects I'm especially proud of. </p>
            <div className="featured-grid">
              {featuredProjects.map((project) => (
                <FeaturedProject key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
        <ProjectArchive projects={archiveProjects} />
      </main>
      <Footer />
    </div>
  )
}

export default App
