import React from "react";
import "../components/FeatureCard.css";

function FeatureCard({ title, description }) {
  return (
    <div className="card">
      <div className="card__description">
        <h2 className="card__description--title"> {title}</h2>
        <p className="card__description--sub-title">{description}</p>
        <div className="card__btns">
          <button className="card__btn--primary">Try now</button>
          <button className="card__btn--secondary">Learn more</button>
        </div>
      </div>
      <figure className="card__img-container">
        <img
          className="card__img"
          src="\src\assets\twogirlsworking.jpg"
          alt=""
        />
      </figure>
    </div>
  );
}

export default FeatureCard;
