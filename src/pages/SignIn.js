import React from "react";
import styled from "styled-components";
import { AuthContext } from "../context/auth.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.png";

export default function SignIn() {
  const navigate = useNavigate();

  const { setToken, setCurrentUser } = React.useContext(AuthContext);

  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  let body = {
    email: email,
    password: password,
  };

  function sendData(e) {
    e.preventDefault();

    if (body.email && body.password) {
      axios
        .post("http://localhost:5000/", body)
        .then((res) => {
          setToken(res.data.token);
          setCurrentUser(res.data.user);
          navigate("/feed");
        })
        .catch((err) => alert(err.response.data));
    } else {
      alert("Preencha todos os campos!");
    }
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
      <p onClick={() => navigate("/sign-up")}>Primeira vez? Cadastre-se!</p>
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
    padding: 30px;
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
    background-color: white;
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
    background: #a328d6;
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
    font-weight: 700;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: white;
  }
`;
