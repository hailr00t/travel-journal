import React from "react";
import logo from "../images/logo.svg";

export default function Nav() {
  return (
    <div className="nav">
      <span className="nav--header">
        <img src={logo} alt="globe-icon" className="nav--logo" />
        <h1 className="nav--text">my travel journal.</h1>
      </span>
    </div>
  );
}
