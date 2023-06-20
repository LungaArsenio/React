import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import SignCard from "../components/SignCard";

function Blog() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <Header hideButtons={true} image={"./src/assets/bigblogpic.jpg"} />
          <Blogs numCards={6} />
          <SignCard image={"./src/assets/girlsmilling.jpg"} />
        </div>
      </div>
    </>
  );
}

export default Blog;
