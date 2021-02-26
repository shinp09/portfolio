import React from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className={style.container}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Skill">Skill</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
