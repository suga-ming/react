import React from "react";
import ListItem from "./ListItem";

export default function TodoBoard(props) {
  return (
    <div>
      {props.list.map((items) => (
        <ListItem items={items} />
      ))}
    </div>
  );
}
