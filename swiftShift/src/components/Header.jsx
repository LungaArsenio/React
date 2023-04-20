import React from "react";
import "./Header.css";

function Header({ title, description }) {
  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
      <p className="header__description"> {description}</p>
      <div className="header__btn">
        <button className="header__btn--left">Join us now</button>
        <button className="header__btn--right">Request demo</button>
      </div>
      {/* <div className="header__imgContainer"> */}
      <img className="header__img" src="./src/assets/teampicture.jpg" alt="" />
      {/* </div> */}
    </div>
  );
}

export default Header;
