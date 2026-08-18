import introPic from '../assets/intro_pic.png'

const disciplines = ['Marketing', 'Journalism', 'Data + Interactives']
const links = ['LinkedIn', 'Email', 'Resume', 'GitHub']

function IntroSection() {
  return (
    <section className="intro" id="top">
      <div className="content-container intro-inner">
        <div className="intro-art">
          <img className="intro-image" src={introPic} alt="Eunice Lee" />
        </div>

        <div className="intro-copy">
          <h1>Eunice Lee</h1>
          <p className="intro-deck">A short placeholder introduction belongs here—an opening note about your point of view and the work you make.</p>
          <ul className="discipline-list" aria-label="Disciplines">
            {disciplines.map((discipline) => <li key={discipline}>{discipline}</li>)}
          </ul>
          <div className="contact-links" aria-label="Contact links">
            {links.map((link) => <a href="#contact" key={link}>{link}<span aria-hidden="true"> ↗</span></a>)}
          </div>
        </div>
      </div>
      <a className="intro-scroll-cue" href="#featured" aria-label="Scroll to Selected work">
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  )
}

export default IntroSection
