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
          <p className='intro-deck'>Hi! Welcome to my kitchen, where I'm always cooking something up :)
            <br/><br/>
            I'm a multimedia journalist, especially interested in <b>data and interactives journalism.</b> I love thinking about newsroom products and how people actually experience the news. I also have a side gig in marketing and PR.
            <br/><br/>
            I'm drawn to two things: storytelling and buidling creative things. That might mean reporting, building an interactive, producing a video, or trying something completely new!</p>
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
