import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import NavBar from "./NavBar";

library.add(fab, faHome, faUser);

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
    link: "/#asxSearch",
    icon: ""
  },
  {
    label: "Experiences",
    link: "/#experiences",
    icon: ""
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
      </Head>
      <NavBar navMenu={navMenu} />
      <div className="main">{props.children}</div>
    </div>
  );
};

export default Layout;
