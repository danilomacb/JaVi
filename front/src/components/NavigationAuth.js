import React from "react";
import { Link } from "react-router-dom";

function NavigationAuth({ token }) {
  if (token) {
    return <Link to="#">Sair</Link>;
  }

  return (
    <>
      <Link to="/cadastrar" className="nav-link">
        Cadastrar
      </Link>
      <Link to="/entrar" className="nav-link">
        Entrar
      </Link>
    </>
  );
}

export default NavigationAuth;
