import React from "react";

export default function SearchBar() {
  return (
    <div>
      <input placeholder="Search..."></input>
      <div>
        <input type="checkbox" id="stock"></input>
        <label htmlFor="stock">Only show products in stock</label>
      </div>
    </div>
  );
}
