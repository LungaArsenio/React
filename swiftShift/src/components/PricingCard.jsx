import React from "react";
import "../components/PricingCard.css";

function PricingCard({ title, description, price, time, main }) {
  return (
    <div className="pricingCard">
      <div className="pricingCard__header">
        <h3 className="pricingCard__header--title">{title}</h3>
        <p className="pricingCard__header--description"> {description} </p>
        <div className="pricingCard__header__pricing">
          <p className="pricingCard__header__pricing--price"> {price} </p>
          <span className="pricingCard__header__pricing--time">{time}</span>
        </div>
      </div>
      <div className="pricingCard__features"></div>
    </div>
  );
}

export default PricingCard;
