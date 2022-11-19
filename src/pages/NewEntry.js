import React from "react";
import styled from "styled-components";
import { useState, useNavigate } from "react";
import {AddScreen} from '../assets/AddScreen.js'
import { useNavigate } from 'react-router-dom';

export default function NewEntry() {
  const navigate = useNavigate()

  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");

  const entry = {
    valor: valor,
    descricao: descricao,
  };

  function sendEntry(e) {
    e.preventDefault();


    if(entry.valor && entry.descricao){

      axios.post("http://localhost:5000/new-entry", entry)
      .then((res) => {
        console.log(res.data)
        navigate("/feed")
      })
      .catch((err) => console.log(err.response.data))



    }else{
      alert ("Insira todos os dados!")
    }



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


