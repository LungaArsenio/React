import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";

function About() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <Header
            hideButtons={true}
            title={"About us"}
            description={
              "With advanced security measures and seamless integration with other tools, our product/service is designed to streamline your workflow and help you work more efficiently."
            }
            image={"./src/assets/teampicture.jpg"}
          />
        </div>
      </div>
    </>
  );
}

export default About;
