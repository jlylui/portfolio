import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const NavBar = props => {
  const [navClassName, setNavClassName] = useState("collapse navbar-collapse");
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const navRef = useRef(null);

  console.log(navbarColor);
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
    const scrollHeight = 150;
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > scrollHeight ||
        document.body.scrollTop > scrollHeight
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < scrollHeight ||
        document.body.scrollTop < scrollHeight
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return () => {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const navMenu = (
    <div className={navClassName}>
      <ul className="navbar-nav ml-auto">
        {props.navMenu.map((menu, index) => (
          <li className="nav-item" key={index}>
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
      <div className="container" ref={navRef}>
        <div className="navbar-translate">
          <a className="navbar-brand">
            <img
              src={`../${props.navMenu[0].logo}`}
              alt=""
              width="30"
              scrollHeight="30"
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
