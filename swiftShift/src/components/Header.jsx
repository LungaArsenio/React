import React from "react";
import "./Header.css";

function Header({ title, description, image, hideButtons }) {
  return (
    <div className="header">
      <h1 className={!title ? "header__title hide" : "header__title"}>
        {title}
      </h1>
      <p
        className={
          !description ? "header__description hide" : "header__description"
        }
      >
        {description}
      </p>
      <div className={!hideButtons ? `header__btn` : `header__btn hide`}>
        <button className="header__btn--left ">Join us now</button>
        <button className="header__btn--right">Request demo</button>
      </div>

      <figure className="header__img-container">
        <img
          className={hideButtons ? "header__img" : "header__img contrast"}
          src={image}
        />
      </figure>
    </div>
  );
}

export default Header;
