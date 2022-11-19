import React from "react";
import styled from "styled-components";
import { useState } from "react";
import {AddScreen} from '../assets/AddScreen.js'

export default function NewExit() {
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");

  const exit = {
    valor: valor,
    descricao: descricao,
  };

  function sendExit(e) {
    e.preventDefault();

    console.log(exit);
  }

  return (
    <>
    <h1> Nova saída </h1>
    <AddScreen>

      <form onSubmit={sendExit}>
        <input
          name="valor"
          type="number"
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


