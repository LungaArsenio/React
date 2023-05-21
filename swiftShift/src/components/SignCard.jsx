import React from "react";
import "../components/SignCard.css";

function SignCard({ image }) {
  return (
    <div className="signCard">
      <div className="signCard__description">
        <p className="signCard__description--title">Get started</p>
        <p className="signCard__description--sub-title">
          Do consecteur proident proident id eiusod deserunt consequat pariatur
          ad ex velit do Lore reprehendit
        </p>
        <button className="signCard__btn">Sign in</button>
      </div>
      <figure className="signCard__container">
        <img className="signCard__image" src={image} alt="" />
      </figure>
    </div>
  );
}

export default SignCard;
