import React from "react";
import "../components/Trusted.css";

function Trusted({ title }) {
  return (
    <div className="trusted">
      <h3 className="trusted__title">{title}</h3>
      <div className="trusted__row">
        <img
          className="trusted__row__img"
          src="./src/assets/molestie.svg"
          alt="Company logo"
        />
        <img
          className="trusted__row__img"
          src="./src/assets/egestas.svg"
          alt="Company logo"
        />
        <img
          className="trusted__row__img"
          src="./src/assets/torquent.svg"
          alt="Company logo"
        />
        <img
          className="trusted__row__img"
          src="./src/assets/dolor.svg"
          alt="Company logo"
        />
        <img
          className="trusted__row__img"
          src="./src/assets/sociousqu.svg"
          alt="Company logo"
        />
      </div>
    </div>
  );
}

export default Trusted;
