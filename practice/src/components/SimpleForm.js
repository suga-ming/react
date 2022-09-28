import React, { useState } from "react";

export default function SimpleForm() {
  //   const [nickname, setNickName] = useState("");
  //   const [password, setPassword] = useState("");
  const [info, setInfo] = useState({
    nickname: "",
    password: "",
  });

  //   const handleChange = (e) => {
  //     if (e.target.name == "nickname") {
  //       setNickName(e.target.value);
  //     } else {
  //       setPassword(e.target.value);
  //     }
  //   };

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const { nickname, password } = info;
    e.preventDefault();
    alert(`닉넴: ${nickname} 비번: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>닉네임 :</label>
      <input
        type="text"
        name="nickname"
        onChange={handleChange}
        style={{
          marginTop: "100px",
        }}
        value={info.nickname}
      />
      <br />
      <label>비번 :</label>
      <input
        type="text"
        name="password"
        onChange={handleChange}
        value={info.password}
      />
      <input type="submit" value="제출" />
    </form>
  );
}
