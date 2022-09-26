import React from "react";

export default function BusinessCard(props) {
  const { company, team, name, phoneNumber, email } = props.info;
  return (
    <div>
      <br />
      직장 : {company} <br />
      소속 : {team} <br />
      이름 : {name} <br />
      전화번호 : {phoneNumber} <br />
      이메일 : {email} <br />
    </div>
  );
}
