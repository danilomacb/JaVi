import React from "react";
import { Link } from "react-router-dom";

function Watched() {
  return (
    <>
      <Link to="/add-assistido">Adicionar Novo</Link>
      <h1>Lista de assistidos</h1>
    </>
  );
}

export default Watched;
