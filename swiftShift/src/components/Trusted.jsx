import React from "react";
import "../components/Trusted.css";

function Trusted({ title }) {
  return (
    <div className="trusted">
      <h3 className="trusted__title">{title}</h3>
      <div className="trusted__row">
        <figure className="trusted__row__img">
          <img src="./src/assets/molestie.svg" alt="Company logo" />
        </figure>
        <figure className="trusted__row__img">
          <img src="./src/assets/egestas.svg" alt="Company logo" />
        </figure>
        <figure className="trusted__row__img">
          <img src="./src/assets/torquent.svg" alt="Company logo" />
        </figure>
        <figure className="trusted__row__img">
          <img src="./src/assets/dolor.svg" alt="Company logo" />
        </figure>
        <figure className="trusted__row__img">
          <img src="./src/assets/sociousqu.svg" alt="Company logo" />
        </figure>
      </div>
    </div>
  );
}

export default Trusted;
