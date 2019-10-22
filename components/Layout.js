import React from "react";
import Footer from "../components/Footer";

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
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

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
  faEnvelope,
  faSearch,
  faSpinner
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
    link: "/project",
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
        className="page-header header-filter"
        style={{
          backgroundImage: `url("${assetPrefix}/static/img/header-02.jpg")`
        }}
      ></div>
      <div className="main main-raised">{props.children}</div>
      <Footer navMenu={navMenu} socialMedia={socialMedia} />
    </div>
  );
};

export default Layout;
