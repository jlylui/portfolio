import React from "react";
import Footer from "../components/Footer";
import "../static/css/material-kit.css";
import "../static/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faCode,
  faHistory,
  faHeart,
  faCoffee,
  faSearch,
  faSpinner,
  faLaptopCode,
  faLaptopMedical,
  faMicroscope,
  faGraduationCap,
  faCube,
  faRocket,
  faBasketballBall,
  faRobot
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import Head from "next/head";
import NavBar from "./NavBar";

config.autoAddCss = false;
library.add(
  fab,
  faHome,
  faUser,
  faCode,
  faHistory,
  faCube,
  faRocket,
  faBasketballBall,
  faHeart,
  faCoffee,
  faEnvelope,
  faSearch,
  faSpinner,
  faLaptopCode,
  faLaptopMedical,
  faMicroscope,
  faGraduationCap,
  faRobot
);

const navMenu = [
  {
    brand: "Joycelyn Lui",
    label: "HOME",
    link: "/",
    icon: "home",
    logo: "/static/img/jl-icon-19144-light-square.png"
  },
  {
    label: "About",
    link: "/#about",
    icon: "user"
  },
  {
    label: "Projects",
    link: "/projects",
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
    icon: ["far", "envelope"],
    link: "mailto:joycelyn.lui@hotmail.com",
    target: ""
  },
  {
    icon: ["fab", "github"],
    link: "https://www.github.com/jlylui",
    target: "_blank"
  },
  {
    icon: ["fab", "linkedin"],
    link: "https://www.linkedin.com/in/joycelyn-lui-44302585",
    target: "_blank"
  },
  {
    icon: ["fab", "instagram"],
    link: "https://www.instagram.com/alphacs4/",
    target: "_blank"
  },
  {
    icon: ["fab", "pinterest"],
    link: "https://www.pinterest.co.uk/heyjoycelyn/",
    target: "_blank"
  }
];
const assetPrefix = process.env.ASSET_PREFIX;
const Layout = props => {
  return (
    <div>
      <Head>
        <title>Joycelyn Lui</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href={`${assetPrefix}/static/img/jl-icon-19144-light-square.ico`}
        />
      </Head>
      <NavBar navMenu={navMenu} />
      <div
        className={`${props.className} page-header header-filter`}
        style={{
          backgroundImage: `url("${assetPrefix}/static/img/header-04.jpg")`
        }}>
        <div className="container">
          <div className={`${props.hide ? `collapse ` : ``}text-center`}>
            <img
              src={`${assetPrefix}/static/img/jl-icon-19144-light-square.png`}
              alt=""
              className="img-fluid profile-img"
            />
            <h2 className="profile-title ">Joycelyn Lui</h2>
          </div>
          <h3 className="text-center">{props.subtitle}</h3>
          <div
            className={`${
              props.hide ? `collapse ` : ``
            }row justify-content-center`}>
            <p>
              {socialMedia.map((media, index) => (
                <a href={media.link} target="_blank" key={index}>
                  <button className="btn btn-social btn-link">
                    <FontAwesomeIcon icon={media.icon} size="2x" />
                  </button>
                </a>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="main main-raised">{props.children}</div>
      <Footer navMenu={navMenu} socialMedia={socialMedia} />
    </div>
  );
};

export default Layout;
