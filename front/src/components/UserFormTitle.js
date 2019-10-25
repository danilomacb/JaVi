import React from "react";

function UserFormTitle({ match }) {
  if (match.path === "/entrar") {
    return <h1 className="mb-4">Entrar</h1>;
  }
  if (match.path === "/cadastrar") {
    return <h1 className="mb-4">Cadastrar</h1>;
  }
  return <></>;
}

export default UserFormTitle;
