function Footer() {
  return (
    <footer id="contact">
      <div className="content-container">
        <div className="footer-main">
          <p>You made it to the bottom! thank youuu</p>
          <a style={{ fontSize: "1rem" }} href="https://drive.google.com/file/d/1PBCGJkdMvfn0kMQJ_g3868qMX6mgxMij/view?usp=sharing">
            {" "}
            My Resume ↗
          </a>
        </div>
        <div className="footer-content">
          <p>
            p.s. my website is food themed because I love cooking and eating !
          </p>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Eunice Lee</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
