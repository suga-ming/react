import React, { useState } from "react";

const Banner = () => {
  const [visible, setVisible] = useState(true);
  const jackpot = () => {
    alert("10% 할인 쿠폰에 당첨 되었습니다");
  };
  const closed = (e) => {
    e.stopPropagation();
    setVisible(false);
  };
  return visible ? (
    <div
      onClick={jackpot}
      style={{
        backgroundColor: "pink",
        fontWeight: "bold",
        height: "50px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      이 곳을 클릭해서 쿠폰을 받아가세요.
      <button onClick={closed}>닫기</button>
    </div>
  ) : null;
};

export default Banner;
