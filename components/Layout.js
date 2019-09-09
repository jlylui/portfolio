import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHome, faUsers } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faHome, faUsers);

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
    link: "/about",
    icon: "users"
  },
  {
    label: "Projects",
    link: "/projects",
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
