import React from "react";
import icon from "../images/react.svg";

export default function Header() {
  return (
    <header>
      <img src={icon} alt="icon" />
      <h3>React Facts</h3>
      <h4>React Course - Project 1</h4>
    </header>
  );
}
