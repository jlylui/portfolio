import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const date = new Date().getFullYear();

const Footer = props => {
  return (
    <footer className="footer footer-default">
      <div className="container nav-container">
        <div className="row justify-content-center">
          {props.socialMedia.map((media, index) => (
            <div className="col-auto" key={index}>
              <a href={media.link} target={media.target}>
                <button className="btn btn-social btn-just-icon btn-round">
                  <FontAwesomeIcon icon={media.icon} />
                </button>
              </a>
            </div>
          ))}
        </div>
        <nav className="float-md-left">
          <ul className="footer-nav-menu">
            {props.navMenu.map((link, index) => (
              <li key={index}>
                <a href={link.link}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="copyright float-md-right">
          &copy;{date} Made with <FontAwesomeIcon icon={"heart"} /> and{" "}
          <FontAwesomeIcon icon={"coffee"} /> by{" "}
          <a href="https://www.joycelynlui.com/" target="blank">
            Joycelyn Lui
          </a>{" "}
          in Sydney
        </div>
      </div>
    </footer>
  );
};

export default Footer;
