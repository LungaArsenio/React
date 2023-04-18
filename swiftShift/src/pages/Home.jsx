import React from "react";
import Nav from "../components/Nav";
import "./Home.css";
import Header from "../components/Header";

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
        </div>
      </div>
    </>
  );
}

export default Home;
