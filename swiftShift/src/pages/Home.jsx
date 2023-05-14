import React from "react";
import Nav from "../components/Nav";
import "../App.css";
import Header from "../components/Header";
import Trusted from "../components/Trusted";
import FeatureCard from "../components/FeatureCard";
import Pricing from "../components/Pricing";

function Home() {
  const reverse = true;
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <Header
            title="SwiftShift"
            description="Streamline Your Workflow with Our Secure, User-Friendly Product/Service - Seamlessly Integrated with Other Tools."
            image="./src/assets/teampicture.jpg"
          />
          <Trusted title="Trusted by" />
          <FeatureCard
            title="User-friendly interface"
            description="Our product/service has an intuitive design, making it easy for users
          to navigate and access the features they need."
            image="./src/assets/twogirlsworking.jpg"
          />
          <FeatureCard
            reverse={reverse}
            title="Customizable settings"
            description="Users can tailor the product/service to meet
            their specific needs and preferences."
            image="./src/assets/menandwomenworking.jpg"
          />
          <Pricing />
        </div>
      </div>
    </>
  );
}

export default Home;
