import React from "react";
import "../components/Pricing.css";
import PricingCard from "./PricingCard";
import { useState } from "react";

function Pricing() {
  // Toggle logic
  const [activePlan, setActivePlan] = useState(1);
  // activePlan is updated based on passed handleClick parameter
  const handleClick = (plan) => {
    setActivePlan(plan);
  };
  // End
  return (
    <div className="pricing">
      <div className="pricing__description">
        <p className="pricing__description__title">Pricing</p>
        <p className="pricing__description__sub-title">
          Officia ecercitation quis voluptate elit consequat nostruad
        </p>
      </div>
      <div className="pricing__toggle">
        <button
          onClick={() => {
            handleClick(1);
          }}
          className={
            activePlan === 1
              ? "pricing__toggle--btn active"
              : "pricing__toggle--btn"
          }
        >
          Monthly
        </button>
        <button
          onClick={() => {
            handleClick(2);
          }}
          className={
            activePlan === 2
              ? "pricing__toggle--btn active"
              : "pricing__toggle--btn"
          }
        >
          Yearly
        </button>
      </div>
      {/* Conditional Rendering */}
      {activePlan === 1 && (
        <div className="pricing__cards">
          <PricingCard
            title="Personal"
            description="Ipsum deserunt nisi tempor labor"
            price="$50"
            time={undefined}
          />
          <PricingCard
            title="Startup"
            description="Ipsum deserunt nisi tempor labor"
            price="$100"
            main={true}
            time={undefined}
          />
          <PricingCard
            title="Organization"
            description="Ipsum deserunt nisi tempor labor"
            price="$150"
            time={undefined}
          />
        </div>
      )}

      {activePlan === 2 && (
        <div className="pricing__cards">
          <PricingCard
            title="Personal"
            description="Ipsum deserunt nisi tempor labor"
            price={"$600"}
            time={undefined}
          />
          <PricingCard
            title="Startup"
            description="Ipsum deserunt nisi tempor labor"
            price="$1200"
            main={true}
            time={undefined}
          />
          <PricingCard
            title="Organization"
            description="Ipsum deserunt nisi tempor labor"
            price="$1800"
            time={undefined}
          />
        </div>
      )}
      {/* End */}
    </div>
  );
}

export default Pricing;
