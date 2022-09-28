import React, { useState } from "react";
import TodoBoard from "./TodoBoard";

export default function ToDo() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const AddList = () => {
    setList([...list, item]);
    setItem("");
  };
  const handle = (e) => {
    setItem(e.target.value);
  };

  return (
    <div>
      <div>To Do List</div>
      <div>
        <input type="text" name="item" onChange={handle}></input>
        <button onClick={AddList}>추가</button>
      </div>
      <TodoBoard list={list} />
    </div>
  );
}
