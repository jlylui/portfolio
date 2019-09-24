import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const NavBar = props => {
  const [navClassName, setNavClassName] = useState("collapse navbar-collapse");
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [isLoading, setIsLoading] = useState(true);
  // console.log(isLoading);
  const navRef = useRef(null);

  const handleNav = () => {
    if (navClassName !== "") {
      // opened navbar
      setNavClassName("");
    } else {
      // collapsed navbar
      setNavClassName("collapse navbar-collapse");
    }
  };

  const handleClickOutsideRef = ref => {
    const handleClickOutside = event => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        navClassName === ""
      ) {
        handleNav();
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  };

  useEffect(() => {
    const scroll_height = 150;
    setIsLoading(false);
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > scroll_height ||
        document.body.scrollTop > scroll_height
      ) {
        // console.log("setNavbarColor to not transparent");
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < scroll_height ||
        document.body.scrollTop < scroll_height
      ) {
        // console.log("setNavbarColor to transparent");
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return () => {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, [isLoading]);

  const navMenu = (
    <div className={navClassName}>
      <ul className="navbar-nav ml-auto nav-ul">
        {props.navMenu.map((menu, index) => (
          <li className="nav-item nav-li" key={index}>
            <Link href={menu.link}>
              <a href={menu.link} className="nav-link" onClick={handleNav}>
                {menu.icon != "" ? (
                  <span>
                    <FontAwesomeIcon icon={menu.icon} />{" "}
                  </span>
                ) : null}
                {menu.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  handleClickOutsideRef(navRef);

  return (
    <nav className={"navbar fixed-top navbar-expand-lg " + navbarColor}>
      <div className="container nav-container" ref={navRef}>
        <div className="navbar-translate">
          <a className="navbar-brand">
            <img
              src={`../${props.navMenu[0].logo}`}
              alt=""
              width="30"
              scroll_height="30"
            />{" "}
            {props.navMenu[0].brand}
          </a>
          <button
            className={`navbar-toggler ${navClassName === "" ? "toggled" : ""}`}
            type="button"
            onClick={handleNav}
          >
            <span className="sr-only"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {navMenu}
      </div>
    </nav>
  );
};

export default NavBar;
