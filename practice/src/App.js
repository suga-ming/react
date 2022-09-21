import "./App.css";
import React, { useState, useEffect } from "react";
import BusinessCard from "./components/BusinessCard";
import datas from "./data/cards";
// import Counter from "./components/Counter";
// import Counter2 from "./components/Counter2";
import Calculator from "./components/Calculator";
import Clock from "./components/Clock";
import FunctionClock from "./components/FunctionClock";
import Random from "./components/Random";

function App() {
  const [cards, setCards] = useState([]);
  const [picked, setPicked] = useState([]);

  function pick() {
    const randomIdx = Math.floor(Math.random() * cards.length);
    const randomItem = cards[randomIdx];

    setCards(cards.filter((c) => c.phoneNumber !== randomItem.phoneNumber));
    setPicked([...picked, randomItem]);
  }

  useEffect(() => {
    setCards(datas);
  }, []);

  console.log(cards);
  console.log(picked);

  return (
    <div className="App">
      {/* <Calculator /> */}
      {/* <Clock /> */}
      {/* <FunctionClock /> */}
      {/* <Random /> */}

      {cards.length > 0 && <button onClick={pick}>추첨하기</button>}
      {/* <BusinessCard /> */}
    </div>
  );
}

export default App;
