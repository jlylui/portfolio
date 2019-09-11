import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faCode,
  faHistory,
  faHeart,
  faCoffee
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Head from "next/head";
import NavBar from "./NavBar";
import "../static/css/material-kit.css";
import "../static/css/style.css";

config.autoAddCss = false;
library.add(
  fab,
  faHome,
  faUser,
  faCode,
  faHistory,
  faHeart,
  faCoffee,
  faEnvelope
);

const navMenu = [
  {
    brand: "Joycelyn Lui",
    label: "HOME",
    link: "/",
    icon: "home",
    logo: "../static/img/jl-icon-19144-light-square.png"
  },
  {
    label: "About",
    link: "/#about",
    icon: "user"
  },
  {
    label: "Projects",
    link: "/#projects",
    icon: "code"
  },
  {
    label: "Timeline",
    link: "/#timeline",
    icon: "history"
  }
];

const socialMedia = [
  {
    icon: ["fab", "github"],
    link: ""
  },
  {
    icon: ["fab", "linkedin"],
    link: ""
  },
  {
    icon: ["fab", "pinterest"],
    link: ""
  }
];
const date = new Date().getFullYear();

const Layout = props => {
  return (
    <div>
      <Head>
        <title>Joycelyn Lui</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="../static/img/jl-icon-19144-light-square.ico"
        />
      </Head>
      <NavBar navMenu={navMenu} />
      <div
        className="page-header header-filter"
        style={{ backgroundImage: `url("/static/img/header-02.jpg")` }}
      ></div>
      <div className="main main-raised">{props.children}</div>
      <footer className="footer footer-default">
        <div className="container">
          <nav className="float-left">
            <ul>
              <li>
                <a href="https://www.joycelynlui.com/">JOYCELYN LUI</a>
              </li>
            </ul>
          </nav>
          <div className="copyright float-right">
            &copy;{date} Made with <FontAwesomeIcon icon={"heart"} /> and{" "}
            <FontAwesomeIcon icon={"coffee"} /> by{" "}
            <a href="https://www.joycelynlui.com/" target="blank">
              Joycelyn Lui
            </a>{" "}
            in Sydney
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
