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
          SwiftShift's differents pricing plans
        </p>
      </div>
      <div className="pricing__toggle">
        <button
          onClick={() => {
            handleClick(1);
          }}
          kk
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
            description="Ideal for individuals or small teams"
            price="$50"
            time={"/user/month"}
          />
          <PricingCard
            title="Startup"
            description="Ideal for growing businesses"
            price="$100"
            main={true}
            time={"/user/month"}
          />
          <PricingCard
            title="Organization"
            description="Ideal for larger businesses"
            price="$150"
            time={"/user/month"}
          />
        </div>
      )}

      {activePlan === 2 && (
        <div className="pricing__cards">
          <PricingCard
            title="Personal"
            description="Ideal for individuals or small teams"
            price={"$600"}
            time={"/user/year"}
          />
          <PricingCard
            title="Startup"
            description="Ideal for growing businesses"
            price="$1200"
            main={true}
            time={"/user/year"}
          />
          <PricingCard
            title="Organization"
            description="Ideal for larger businesses"
            price="$1800"
            time={"/user/year"}
          />
        </div>
      )}
      {/* End */}
    </div>
  );
}

export default Pricing;
