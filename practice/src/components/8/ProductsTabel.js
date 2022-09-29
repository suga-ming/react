import React from "react";

export default function ProductsTabel(props) {
  return (
    <>
      <tr>
        <td>{props.category}</td>
      </tr>
      {props.items.map((item, idx) => (
        <tr key={idx}>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      ))}
    </>
  );
}
