import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { AuthContext } from "../context/auth.js";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs'

export default function Feed() {

const navigate = useNavigate()

const {token, setToken} = React.useContext(AuthContext)
const {currentUser, setCurrentUser} = React.useContext(AuthContext)

const [moves, setMoves] = useState(
  [
    // {data: "00/00", descricao: "ixiii", valor: "00,00", type:"entry"}, 
    {data: dayjs().format("DD/MM"), descricao: "dois", valor: "50,00", type:"exit"}
  ])


const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
}

useEffect(() => {

  axios.get("http://localhost:5000/feed", config)
  .then((res) => {
    console.log(res.data)
  })
  .catch((err)=> console.log(err.response.data))

}, [])



  return (
    <>
      <h1> Olá, {currentUser.name} </h1>
        <RegistryList>
            {/* Não há registros de entrada e saída */}
        {moves.map((move) => (
          <>
          <p> {move.data} </p>
          <p> {move.descricao} </p>
          <p> {move.valor} </p>
          </>
        ))}

        </RegistryList>
        <AddContainer>
        <AddSty onClick={() => navigate("/new-entry")}>
           <h2>+</h2> 
            <h2 >Nova entrada</h2>
        </AddSty>
        <AddSty onClick={() => navigate("/new-exit")}>
            <h2>-</h2>
            <h2>Nova saída</h2>
        </AddSty>
        </AddContainer>
    </>

    
  );
}


const RegistryList = styled.div`
background-color: lightblue;
display: flex;
align-items: center;
width: 326px;
height: 446px;
background: #FFFFFF;
border-radius: 5px;
font-family: 'Raleway';
font-weight: 400;
font-size: 20px;
text-align: center;
color: #868686;
`

const AddContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 13px;

;
`

const AddSty = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 155px;
height: 114px;
background: #A328D6;
color: white;
padding: 18px 13px;

h2{
    width:15px;
}
`