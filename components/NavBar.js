import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const NavBar = props => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  console.log(collapseOpen);
  const linkClick = () => {
    setCollapseOpen(!collapseOpen);
  };

  const navMenu = (
    <div className="navbar-collapse collapse">
      <ul className="navbar-nav ml-auto">
        {props.navMenu.map((menu, index) => (
          <li className="nav-item" key={index}>
            <Link href={menu.link}>
              <a href={menu.link} className="nav-link" onClick={linkClick}>
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

  return (
    <nav className="navbar fixed-top navbar-expand-lg" expand="lg">
      <div className="container">
        <div className="navbar-translate">
          <a className="navbar-brand">
            <img
              src={`../${props.navMenu[0].logo}`}
              alt=""
              width="30"
              height="30"
            />{" "}
            {props.navMenu[0].brand}
          </a>
          <button className="navbar-toggler" type="button" onClick={linkClick}>
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
