import React from "react";
import { Link } from "react-router-dom";

import { resetToken } from "../state/actions";

function NavigationAuth({ token, dispatch }) {
  if (token) {
    return (
      <Link
        to="/"
        onClick={() => {
          dispatch(resetToken());
          return (document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;");
        }}
      >
        Sair
      </Link>
    );
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
