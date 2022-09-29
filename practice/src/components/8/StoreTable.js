import React from "react";
import ProductsTabel from "./ProductsTabel";

export default function StoreTable(props) {
  const { products } = props;
  //   const SportingGoods = props.products.filter(
  //     (p) => p.category === "Sporting Goods"
  //   );
  //   const electronics = props.products.filter(
  //     (p) => p.category === "Electronics"
  //   );

  const result = products.reduce((acc, cur) => {
    if (acc.hasOwnProperty(cur.category)) {
      return {
        ...acc,
        [cur.category]: [...acc[cur.category], cur],
      };
    } else {
      return {
        ...acc,
        [cur.category]: [cur],
      };
    }
  });

  //   console.log(result);
  const keys = Object.keys(result);

  return (
    <tabel>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {keys.map((key, idx) => (
          <ProductsTabel category={key} items={result[key]} key={idx} />
        ))}
      </tbody>
    </tabel>
  );
}
