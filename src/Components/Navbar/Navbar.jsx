import React from "react";
import { ThemeContext } from "../../Context/Theme";
import "./Navbar.css";
// import Brightness2Icon from "@material-ui/icons/Brightness2";
import { CiBrightnessUp } from "react-icons/ci";
// import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import { MdOutlineDarkMode } from "react-icons/md";
// import MenuIcon from "@material-ui/icons/Menu";
import { TfiMenuAlt } from "react-icons/tfi"
// import CloseIcon from "@material-ui/icons/Close";
import { IoCloseOutline } from "react-icons/io5";

export const Navbar = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <>
      <nav className="center nav">
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          <li className="nav__list-item">
            <a
              href="#home"
              onClick={() => toggleNavList("#home")}
              className="link link--nav"
            >
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#about"
              onClick={() => toggleNavList("#about")}
              className="link link--nav"
            >
              About
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={() => toggleNavList("#skills")}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={() => toggleNavList("#projects")}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={() => toggleNavList("#contact")}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          type="button"
          onClick={toggeltheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
          {themename === "dark" ? <MdOutlineDarkMode fontSize="large"/> : <CiBrightnessUp fontSize="large"/>}
        </button>
        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <IoCloseOutline /> : <TfiMenuAlt />}
        </button>
      </nav>
    </>
  );
};
