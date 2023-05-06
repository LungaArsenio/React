import React from "react";
import "../components/Pricing.css";
import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <div className="pricing">
      <div className="pricing__description">
        <p className="pricing__description__title">Pricing</p>
        <p className="pricing__description__sub-title">
          Officia ecercitation quis voluptate elit consequat nostruad
        </p>
      </div>
      <div className="pricing__cards">
        <PricingCard
          title="Personal"
          description="Esse aqui é básico"
          price="$50"
        />
        <PricingCard
          title="Personal"
          description="Esse aqui é básico"
          price="$50"
        />
        <PricingCard
          title="Personal"
          description="Esse aqui é básico"
          price="$50"
        />
      </div>
    </div>
  );
}

export default Pricing;
