import React from "react";
import { useState } from "react";
import { AddScreen } from "../assets/AddScreen.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.js";
import dayjs from "dayjs";

export default function NewExit() {
  const navigate = useNavigate();

  const { currentUser } = React.useContext(AuthContext);

  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");

  const exit = {
    valor: valor,
    descricao: descricao,
    data: dayjs().format("DD/MM"),
    type: "exit",
    email: currentUser.email,
  };

  function sendExit(e) {
    e.preventDefault();

    if (exit.valor && exit.descricao) {
      axios
        .post("http://localhost:5000/new-exit", exit)
        .then((res) => {
          navigate("/feed");
        })
        .catch((err) => alert(err.response.data));
    } else {
      alert("Insira todos os dados!");
    }
  }

  return (
    <>
      <h1> Nova saída </h1>
      <AddScreen>
        <form onSubmit={sendExit}>
          <input
            name="valor"
            type="text"
            placeholder="Valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
          <input
            name="descricao"
            type="text"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
          <button type="submit">Salvar saída</button>
        </form>
      </AddScreen>
    </>
  );
}
