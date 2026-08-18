import introPic from '../assets/intro_pic.png'

const disciplines = ['Marketing', 'Journalism', 'Data + Interactives']
const links = ['LinkedIn', 'Email', 'Resume', 'GitHub']

function IntroSection() {
  return (
    <section className="intro" id="top">
      <div className="content-container intro-inner">
        <div className="intro-copy">
          <h1>Eunice Lee</h1>
          <p className="intro-midsize">and what she's cooking...</p>
        </div>

        <div className="intro-copy">
          <p className='intro-deck'>Hi! Welcome to my kitchen, where I'm always cooking something up. (Sorry, I had to.)
            <br/><br/>
            Jokes aside, I'm a multimedia journalist interested in all things media, with occasional marketing projects on the side. I'm especially invested in data and interactives journalism, and I love thinking about newsroom products and how people actually experience the news.
            <br/><br/>
            I also just really love stories, whether that means listening to someone tell me theirs or finding one buried in a dataset. And I love making things too, from interactives and videos to whatever random creative idea I decide to try next.</p>
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
