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
import Banner from "./components/Banner";

function App() {
  const [cards, setCards] = useState([]);
  const [picked, setPicked] = useState([]);

  function Pick() {
    if (picked.length > 2) {
      const names = picked.reduce((acc, cur) => {
        return (acc = acc.concat(`${cur.name}, `));
      }, "");
      return alert(`당첨 완료 ${names} 입니다.`);
    }

    const randomIdx = Math.floor(Math.random() * cards.length);
    const randomItem = cards[randomIdx];

    setCards(cards.filter((c) => c.phoneNumber !== randomItem.phoneNumber));
    setPicked([...picked, randomItem]);
  }

  useEffect(() => {
    setCards(datas);
  }, []);

  const result = picked.map((pick) => (
    <BusinessCard info={pick} key={pick.phoneNumber} />
  ));

  console.log(result);

  return (
    <div className="App">
      {/* <Calculator /> */}
      {/* <Clock /> */}
      {/* <FunctionClock /> */}
      {/* <Random /> */}

      {/* {cards.length > 0 && <button onClick={Pick}>추첨하기</button>} */}
      {/* {picked.length > 0 && <BusinessCard info={picked[picked.length - 1]} />} */}
      {/* {picked.length > 0 && result} */}
      {<Banner />}
    </div>
  );
}

export default App;
