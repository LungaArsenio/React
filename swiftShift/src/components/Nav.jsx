import React from "react";
import Features from "../pages/Features";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import About from "../pages/About";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img className="nav__logo" src="./src/assets/logo.svg" alt="" />
      <div className="nav__links">
        <Link to="/features" element={<Features />}>
          Features
        </Link>
        <Link to="/features" element={<Features />}>
          Pricing
        </Link>
        <Link to="/about" element={<About />}>
          About us
        </Link>
        <Link to="/blog" element={<Blog />}>
          Blog
        </Link>
        <Link to="/contact" element={<Contact />}>
          Contact
        </Link>
      </div>
      <div className="nav__sign">
        <button className="nav__sign--btn">Sign in</button>
        <button className="nav__sign--btn purple">Sign up</button>
      </div>
    </div>
  );
}

export default Nav;
