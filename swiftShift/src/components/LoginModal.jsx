import { faXmark, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../components/Nav.css";
import "../components/LoginModal.css";

const LoginModal = ({ sign }) => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className="nav__sign--btn purple" onClick={handleSignIn}>
        {sign}
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal--left">
            {/* <span className="close" onClick={handleCloseModal}>
              <FontAwesomeIcon icon={faXmark} className="xMark" />
            </span> */}
            <h2 className="modal--left__title">Create an account</h2>
            <form className="modal--left__form">
              <div className="form__item">
                <label htmlFor="username">
                  Full name
                  <input className="input" type="text" id="username" />
                </label>
              </div>
              <div className="form__item">
                <label htmlFor="email">
                  Email
                  <input
                    placeholder="example.email@gmail.com"
                    className="input"
                    type="text"
                    id="username"
                  />
                </label>
              </div>
              <div className="form__item password">
                <label htmlFor="password">
                  Password
                  <input
                    placeholder="Enter at least 8+ characters"
                    className="input"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handleChange}
                    // id="password"
                  />
                </label>
                <button
                  type="button"
                  className="eyes"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FontAwesomeIcon className="eye" icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon className="eye" icon={faEye} />
                  )}
                </button>
              </div>
              <button
                onClick={handleCloseModal}
                className="form__btn"
                type="submit"
              >
                {sign}
              </button>
            </form>
          </div>
          <figure className="modal--right">
            <img
              className="modal--right__img"
              src="./src/assets/abstractpic.svg"
              alt="abstract picture"
            />
          </figure>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
