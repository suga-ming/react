import React from "react";
import logo from "../src/logo.svg";

const Header = () => {
  //   const Greeting = (grade) => {
  //     if (grade === "Red") return `환영합니다. ${grade} 등급 회원님!`;
  //     return `안녕하세요, ${grade}등급 회원님!`;
  //   };

  const grade = "Red";
  const count = 0;

  return (
    <div className="App">
      <header className="App-header" tabIndex="0">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. 안녕!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {grade === "Red"
            ? `환영합니다. ${grade} 등급 회원님!`
            : `안녕하세요, ${grade}등급 회원님!`}

          <div>{count && <h1>Messages: {count}</h1>}</div>
        </a>
      </header>
      <input type="checkbox" name="agreement" id="agreement-el"></input>
      <label htmlFor="agreement-el">인증</label>
    </div>
  );
};

export default Header;
