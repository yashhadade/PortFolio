import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./styles.scss";
const data = [
  { label: "HOME", to: "home" },
  { label: "ABOUT ME", to: "about" },
  { label: "SKILLS", to: "skill" },
  { label: "RESUME", to: "resume" },
  { label: "PORTFOLIO", to: "portfolio" },
  { label: "CONTACT", to: "contact" },
];




const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleNavigation = (target) => {
    if (location.pathname === "/") {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: target } });
    }
    handleToggleIcon();
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
          <span className="navbar__container__initials">YH</span>
            {/* <FaReact size={30} /> */}
          </Link>
        </div>
        <ul
          className={`navbar__container__menu ${toggleIcon ? "active" : ""} `}
        >
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                onClick={() => handleNavigation(item.to)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;