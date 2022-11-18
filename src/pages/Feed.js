import React from "react";
import styled from "styled-components";
import { useState } from "react";

export default function Feed() {
  return (
    <>
      <h2> Olá, NOME </h2>
        <RegistryList>
            Não há registros de entrada e saída
        </RegistryList>
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
