import React from "react";
import "../components/PricingCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function PricingCard({ title, description, price, time }) {
  return (
    <div
      className={title === "Startup" ? "pricingCard startup" : "pricingCard"}
    >
      <div className="pricingCard__header">
        <h3
          className={
            title === "Startup"
              ? "pricingCard__header--title startup"
              : "pricingCard__header--title"
          }
        >
          {title}
        </h3>
        <p className="pricingCard__header--description"> {description} </p>
        <div className="pricingCard__header__pricing">
          <p className="pricingCard__header__pricing--price"> {price} </p>
          <span className="pricingCard__header__pricing--time">{time}</span>
        </div>
      </div>
      <div className="pricingCard__features">
        <ul className="pricingCard__features__list">
          <li className="pricingCard__features__listItem">
            <FontAwesomeIcon icon={faCircleCheck} className="circleCheck" />
            <span>Basic scheduling and time tracking features</span>
          </li>
          <li className="pricingCard__features__listItem">
            <FontAwesomeIcon icon={faCircleCheck} className="circleCheck" />
            <span>Mobile app access</span>
          </li>
          <li className="pricingCard__features__listItem">
            {title === "Personal" ? (
              <FontAwesomeIcon icon={faXmark} className="xMark" />
            ) : (
              <FontAwesomeIcon icon={faCircleCheck} className="circleCheck" />
            )}
            <span>API access for integration with other tools</span>
          </li>
          <li className="pricingCard__features__listItem">
            {title === "Personal" ? (
              <FontAwesomeIcon icon={faXmark} className="xMark" />
            ) : (
              <FontAwesomeIcon icon={faCircleCheck} className="circleCheck" />
            )}
            <span>Dedicated account manager and phone support</span>
          </li>
        </ul>
      </div>
      <button
        className={
          title === "Startup" ? "pricingCard__btn startup" : "pricingCard__btn"
        }
      >
        Upgrade
      </button>
    </div>
  );
}

export default PricingCard;
