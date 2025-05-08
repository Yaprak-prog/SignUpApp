import React, { useState } from "react";
import "./LoginSignUp.css";

import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import person_icon from "../assets/person.png";

function LoginSignUp() {
  const [active, setActive] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{active}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={person_icon}></img>
          <input type="text" placeholder="Name"></input>
        </div>
        <div className="input">
          <img src={email_icon}></img>
          <input type="email" placeholder="Email"></input>
        </div>
        {active === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={password_icon}></img>
            <input type="password" placeholder="Password"></input>
          </div>
        )}
      </div>

      {active === "Sign Up" ? (
        <div className="forgot-password">
          Lost password?<span>Click Here!</span>
        </div>
      ) : (
        <div></div>
      )}

      <div className="buttons">
        <div
          className={active === "Sign Up" ? "submit" : "submit gray"}
          onClick={() => setActive("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={active === "Login" ? "submit" : "submit gray"}
          onClick={() => setActive("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
