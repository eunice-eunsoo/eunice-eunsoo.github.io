import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import IntroSection from './components/IntroSection'
import FeaturedProject from './components/FeaturedProject'
import ProjectArchive from './components/ProjectArchive'
import { archiveProjects, featuredProjects } from './data/projects'

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <IntroSection />
        <section id="featured" aria-label="Featured projects">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.id}
              project={project}
              layout={index === 1 ? 'reverse' : index === 2 ? 'wide' : 'default'}
            />
          ))}
        </section>
        <ProjectArchive projects={archiveProjects} />
      </main>
      <Footer />
    </div>
  )
}

export default App
