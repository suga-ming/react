import React from "react";
import logo from "../logo.svg";

export default function Welcome(props) {
  return (
    <>
      {props.withImg && <img src={logo} alt="welcomeLogo" height="200" />}
      <div>Hello!</div>
      <div>
        <span>{props.name}</span>
        {props.age}
      </div>
    </>
  );
}
