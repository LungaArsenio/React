import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import FeatureCard from "../components/FeatureCard";
import SignCard from "../components/SignCard";

function Features() {
  const hideButtons = true;
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <Header
            title="Real-time data analysis"
            description="Our product/service uses advanced
          algorithms to analyze data in real-time, providing users
          with up-to-date insights and recommendations."
            image="./src/assets/blog3.jpg"
            hideButtons
          />

          <FeatureCard
            title="Automated processes "
            description="Our product/service automates repetitive tasks,
            freeing up users' time and reducing the risk of human error."
            image="./src/assets/twogirlsworking.jpg"
          />

          <FeatureCard
            reverse
            title="Integration with other tools "
            description="Our product/service seamlessly integrates
             with other popular tools and platforms,
             allowing users to streamline their workflows."
            image="./src/assets/menandwomenworking.jpg"
          />

          <FeatureCard
            title="24/7 customer support "
            description=" Our knowledgeable and responsive customer support
            team is available around the clock to assist users
             with any questions or issues they may have."
            image="./src/assets/workinginboard.jpeg"
          />

          <SignCard image="src/assets/guyexplainingproject.jpg" />
        </div>
      </div>
    </>
  );
}

export default Features;
