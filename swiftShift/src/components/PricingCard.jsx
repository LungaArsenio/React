import React from "react";
import "../components/PricingCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function PricingCard({ title, description, price, time }) {
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
      <div className="pricingCard__features">
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </div>
  );
}

export default PricingCard;
