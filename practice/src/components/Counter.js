import React, { useState } from "react";

export default function Counter() {
  const operators = ["+", "-", "*"];

  const [info, setInfo] = useState({
    count: 0,
    show: true,
    operator: operators[0],
  });

  const hide = () => {
    setInfo({ ...info, show: !info.show });
  };

  return (
    <div>
      <button
        onClick={() => {
          let result;
          if (info.operator === "+") result = info.count + 1;
          if (info.operator === "-") result = info.count - 1;
          if (info.operator === "*") result = info.count * 1;
          setInfo({ ...info, count: result });
          // setCount(result);
        }}
      >
        {info.operator}1
      </button>
      <button onClick={hide}>Show and Hide</button>
      <button
        onClick={() => {
          const idx = Math.floor(Math.random() * operators.length);
          setInfo({ ...info, operator: operators[idx] });
          //   setOperator(operators[idx]);
        }}
      >
        change Operator
      </button>
      {/* <button
        onClick={() => {
          setInfo({ ...info, show: !info.show });
        }}
      >
        Show and Hide
      </button> */}
      <br />
      {info.show && `Counter: ${info.count}`}
    </div>
  );
}
