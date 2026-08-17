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
        <p className="eyebrow">Portfolio / Selected work</p>
        <h1>Eunice<br /><em>Lee</em></h1>
        <p className="intro-deck">A short placeholder introduction belongs here—an opening note about your point of view and the work you make.</p>
        <div className="discipline-index">
          <span className="index-label">Working across</span>
          <ol>
            {disciplines.map((discipline, index) => <li key={discipline}><span>0{index + 1}</span>{discipline}</li>)}
          </ol>
        </div>
        <div className="contact-links" aria-label="Contact links">
          {links.map((link) => <a href="#contact" key={link}>{link}<span aria-hidden="true">↗</span></a>)}
        </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
