import React from "react";
import styled from "styled-components";
import { useState } from "react";
import {AddScreen} from '../assets/AddScreen.js'

export default function NewEntry() {
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");

  const entry = {
    valor: valor,
    descricao: descricao,
  };

  function sendEntry(e) {
    e.preventDefault();

    console.log(entry);
  }

  return (
    <>
    <h1> Nova entrada </h1>
    <AddScreen>

      <form onSubmit={sendEntry}>
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
        <button type="submit">Salvar entrada</button>
      </form>
    </AddScreen>
    </>
  );
}


