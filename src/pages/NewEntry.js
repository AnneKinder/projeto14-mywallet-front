import React from "react";
import { useState } from "react";
import { AddScreen } from "../assets/AddScreen.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.js";
import dayjs from "dayjs";

export default function NewEntry() {
  const navigate = useNavigate();

  const { currentUser } = React.useContext(AuthContext);

  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");

  const entry = {
    valor: valor,
    descricao: descricao,
    data: dayjs().format("DD/MM"),
    type: "entry",
    email: currentUser.email,
  };

  function sendEntry(e) {
    e.preventDefault();

    if (entry.valor && entry.descricao) {
      axios
        .post("http://localhost:5000/new-entry", entry)
        .then((res) => {
          console.log(res.data);
          navigate("/feed");
        })
        .catch((err) => alert(err.response.data));
    } else {
      alert("Insira todos os dados!");
    }
  }

  return (
    <>
      <h1> Nova entrada </h1>
      <AddScreen>
        <form onSubmit={sendEntry}>
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
          <button type="submit">Salvar entrada</button>
        </form>
      </AddScreen>
    </>
  );
}
