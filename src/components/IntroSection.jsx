import namePic from "../assets/name.png"

// const disciplines = ['Marketing', 'Journalism', 'Data + Interactives']

// Add these files to src/assets, then import them and replace each null icon below:
// import emailIcon from '../assets/email-icon.svg'
// import linkedinIcon from '../assets/linkedin-icon.svg'
// import resumeIcon from '../assets/resume-icon.svg'
// import githubIcon from '../assets/github-icon.svg'
const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:eunicelee043@gmail.com',
    icon: null,
    fallback: 'EMAIL',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eunice-eunsoo-lee/',
    icon: null,
    fallback: 'LINKEDIN',
    external: true,
  },
  // {
  //   label: 'Resume',
  //   href: 'YOUR_RESUME_URL_HERE',
  //   icon: null,
  //   fallback: 'CV',
  //   external: true,
  // },
  {
    label: 'GitHub',
    href: 'https://github.com/eunice-eunsoo',
    icon: null,
    fallback: 'GITHUB',
    external: true,
  },
]

function IntroSection() {
  return (
    <section className="intro" id="top">
      <div className="content-container intro-inner">
        <div className="intro-copy intro-design">
          {/* <h1>Eunice Lee</h1> */}
          <img src = {namePic} alt='Eunice lee' style={{ width: '400px', height: 'auto', marginRight:'50px' }}/>
          <p className="intro-midsize" style={{ marginLeft: '100px' }}>and what she's cooking...</p>
        </div>

        <div className="intro-copy intro-text">
          <p className='intro-deck'>Hi! Welcome to my kitchen, where I'm always cooking something up :)
            <br/><br/>
            I'm a multimedia journalist, especially interested in <b>data and interactives journalism.</b> I love thinking about newsroom products and how people actually experience the news. I also have a side gig in marketing and PR.
            <br/><br/>
            I'm drawn to two things: storytelling and buidling creative things. That might mean reporting, building an interactive, producing a video, or trying something completely new!</p>
          {/* <ul className="discipline-list" aria-label="Disciplines">
            {disciplines.map((discipline) => <li key={discipline}>{discipline}</li>)}
          </ul> */}
          <div className="contact-links" aria-label="Contact links">
            {contactLinks.map(({ label, href, icon, fallback, external }) => (
              <a
                className="contact-item"
                href={href}
                aria-label={label}
                key={label}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {icon
                  ? <img src={icon} alt="" aria-hidden="true" />
                  : <span className="contact-icon-fallback" aria-hidden="true">{fallback}</span>}
              </a>
            ))}
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
