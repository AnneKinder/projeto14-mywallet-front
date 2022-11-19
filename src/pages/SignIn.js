import React from "react";
import styled from "styled-components";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function SignIn() {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  let body = {
    email: email,
    password: password,
  };

  function sendData(e) {
    e.preventDefault();

    console.log(body);
  }

  return (
    <SignInSty>
      <img src={logo} alt="logo" />
      <form onSubmit={sendData}>
        <input
          name="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setMail(e.target.value)}
          required
        />
        <input
          name="senha"
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      <p onClick={() => console.log("submit")}>
        Priimeira vez? Cadastre-se!
      </p>
    </SignInSty>
  );
}

const SignInSty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lexend Deca", sans-serif;
  padding: 50px 0 100px 0;

  img {
    width: 190px;
    padding:30px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
  input {
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    left: 36px;
    top: 279px;
    background-color: lavenderblush;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #2d3133;
    padding: 10px;
    margin-bottom: 8px;
  }

  button {
    width: 303px;
    height: 45px;
    background: purple;
     border-radius: 4.63636px;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    border: #52b6ff solid 1px;
    color: #ffffff;
  }

  p {
    margin-top: 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: purple;
  }
`;
