import React from "react";
import Nav from "../components/Nav";
import "./Home.css";
import Header from "../components/Header";
import Trusted from "../components/Trusted";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <Nav />
      <div className="row">
        <div className="container">
          <Header
            title="SwiftShift"
            description="Streamline Your Workflow with Our Secure, User-Friendly Product/Service - Seamlessly Integrated with Other Tools."
          />
          <Trusted title="Trusted by" />
          <Card
            title="User-friendly interface"
            description="Our product/service has an intuitive design, making it easy for users
          to navigate and access the features they need."
          />
        </div>
      </div>
    </>
  );
}

export default Home;
