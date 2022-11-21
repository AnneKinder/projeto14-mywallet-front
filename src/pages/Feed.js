import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { AuthContext } from "../context/auth.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Feed() {
  const navigate = useNavigate();

  const { token, setToken } = React.useContext(AuthContext);
  const { currentUser, setCurrentUser } = React.useContext(AuthContext);
  const [moves, setMoves] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/feed", config)
      .then((res) => {
        setMoves(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  let more = 0;
  let less = 0;
  moves.map((obj) => {
    if (obj.type === "entry") {
      more += Number(obj.valor);
    }

    if (obj.type === "exit") {
      less += Number(obj.valor);
    }
  });

  let saldo = more - less;

  return (
    <>
      <h1> Olá, {currentUser.name} </h1>
      <RegistryList>
        {moves.length === 0 ? (
          <p>Não há registros de entrada e saída</p>
        ) : (
          <>
            {moves.map((move, id) => (
              <MovementSty
                colorprop={move.type === "entry" ? "green" : "red"}
                key={id}
              >
                <h3> {move.data} </h3>
                <h4> {move.descricao} </h4>
                <h5> R${move.valor} </h5>
              </MovementSty>
            ))}

            <SaldoSty>
              <h3>SALDO</h3>
              <h4>R$ {saldo}</h4>
            </SaldoSty>
          </>
        )}
      </RegistryList>
      <AddContainer>
        <AddSty onClick={() => navigate("/new-entry")}>
          <h2>+</h2>
          <h2>Nova entrada</h2>
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
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  width: 326px;
  height: 446px;
  background: #ffffff;
  border-radius: 5px;

  p {
    font-family: "Raleway";
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: #868686;
    margin: 200px 40px;
  }
`;

const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 13px; ;
`;

const AddSty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 155px;
  height: 114px;
  background: #a328d6;
  color: white;
  padding: 18px 13px;

  h2 {
    width: 15px;
  }
`;

const MovementSty = styled.div`
  box-sizing: border-box;
  width: 320px;
  display: flex;
  justify-content: space-between;
  padding: 2px;

  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #c6c6c6;
  }

  h4 {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: black;
  }

  h5 {
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: ${(props) => props.colorprop};
  }
`;

const SaldoSty = styled.div`
  box-sizing: border-box;
  width: 320px;
  display: flex;
  justify-content: space-between;
  padding: 2px;
  bottom: 0;

  h3 {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
  }

  h4 {
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: ${(props) => props.colorprop};
  }
`;
