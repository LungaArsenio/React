import React from "react";

function Nav() {
  return (
    <div className="nav">
      <img className="nav__logo" src="./src/blog1.jpg" alt="" />
      <div className="nav__links">
        {/* <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link> */}
      </div>
      <div className="sign">
        <button className="sign__btn">Sign in</button>
        <button className="sign__btn">Sign up</button>
      </div>
    </div>
  );
}

export default Nav;
