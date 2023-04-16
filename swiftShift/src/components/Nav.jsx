import React from "react";
import Features from "../pages/Features";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import About from "../pages/About";
import { Link } from "react-router-dom";
import "./Nav.css";
import Home from "../pages/Home";

function Nav() {
  return (
    <div className="nav">
      <img className="nav__logo" src="./src/assets/logo.svg" alt="" />
      <div className="nav__links">
        <Link to="/features" element={<Features />}>
          Features
        </Link>
        <Link to="/pricing" element={<Features />}>
          Pricing
        </Link>
        <Link to="/About" element={<About />}>
          About us
        </Link>
        <Link to="/Blog" element={<Blog />}>
          Blog
        </Link>
        <Link to="/Contact" element={<Contact />}>
          Contact
        </Link>
      </div>
      <div className="nav__sign-in">
        <button className="sign__btn">Sign in</button>
        <button className="sign__btn purple">Sign up</button>
      </div>
    </div>
  );
}

export default Nav;
