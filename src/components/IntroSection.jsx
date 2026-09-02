import namePic from "../assets/name.png";
import mailIcon from "../assets/mail.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import personPic from "../assets/person.png";
import foodPic from "../assets/food.png";

// const disciplines = ['Marketing', 'Journalism', 'Data + Interactives']

const contactLinks = [
  {
    label: "Email",
    href: "mailto:eunicelee043@gmail.com",
    icon: mailIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eunice-eunsoo-lee/",
    icon: linkedinIcon,
    external: true,
  },
  // {
  //   label: 'Resume',
  //   href: 'YOUR_RESUME_URL_HERE',
  //   icon: resumeIcon,
  //   external: true,
  // },
  {
    label: "GitHub",
    href: "https://github.com/eunice-eunsoo",
    icon: githubIcon,
    external: true,
  },
];

function IntroSection() {
  return (
    <section className="intro" id="top">
      <div className="content-container intro-inner">
        <div className="intro-copy intro-design">
          <img
            src={personPic}
            alt=""
            className="intro-person"
            aria-hidden="true"
          />
          <img src={foodPic} alt="" className="intro-food" aria-hidden="true" />
          {/* <h1>Eunice Lee</h1> */}
          <img
            src={namePic}
            alt="Eunice lee"
            style={{ width: "400px", height: "auto", marginRight: "50px" }}
          />
          <p className="intro-midsize" style={{ marginLeft: "100px" }}>
            and what she's cooking...
          </p>
        </div>

        <div className="intro-copy intro-text">
          <p className="intro-deck">
            Hi! Welcome to my kitchen, where I'm always cooking something up :)
            <br />
            <br />
            I'm a multimedia journalist, especially interested in{" "}
            <b>data and interactives journalism.</b> I love thinking about
            newsroom products and how people actually experience the news. I
            also have a side gig in marketing and PR.
            <br />
            <br />
            I'm drawn to two things: storytelling and building creative things.
            That might mean reporting, building an interactive, producing a
            video, or trying something completely new!
          </p>
          {/* <ul className="discipline-list" aria-label="Disciplines">
            {disciplines.map((discipline) => <li key={discipline}>{discipline}</li>)}
          </ul> */}
          <div className="contact-links" aria-label="Contact links">
            {contactLinks.map(({ label, href, icon, external }) => (
              <a
                className="contact-item"
                href={href}
                aria-label={label}
                key={label}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <img src={icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <a
        className="intro-scroll-cue"
        href="#featured"
        aria-label="Scroll to Selected work"
      >
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}

export default IntroSection;
