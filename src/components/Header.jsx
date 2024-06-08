import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/comic.png";
import "../index.scss";

const Header = () => {
  return (
    <div className="alignment">
      <div className="aligning" id="new-thing"></div>
      <div className="aligning">
        <NavLink to="/random-comic-generator">
          <img src={logo} className="logo" alt="random-comic-generator" />
        </NavLink>
      </div>
      <div className="navigation-menu">
        <div className="checkClick">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
            to="/random-comic-generator"
          >
            Generator
          </NavLink>
        </div>
        <div className="checkClick">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/random-comic-generator/archive"
          >
            Archive
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;