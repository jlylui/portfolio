import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faCode,
  faHistory
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import NavBar from "./NavBar";
import "../static/css/material-kit.css";
import "../static/css/style.css";

library.add(fab, faHome, faUser, faCode, faHistory);

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
      {props.children}
    </div>
  );
};

export default Layout;
