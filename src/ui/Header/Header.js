import React from "react";
import { Link } from "react-router-dom";
import Github from "../Github/Github";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
            <h1 className="title">DevInt </h1>
        <p className="menu">Interview questions for developers by <b>Developers</b></p>
      <menu className="menu">
        <Link className="menu__link" to="/">
          Home
        </Link>
        <a
          href="https://github.com/elzodxon/DevInt/issues/new"
          className="menu__link"
        >
          Add Question
        </a>
        <Link className="menu__link" to="/about">
          About
        </Link>
      </menu>
      <Github className="Header__github" />
    </header>
  );
};

export default Header;
