import React from "react";

function Message({ loginStatus }) {
  if (loginStatus === true) {
    return <h1>Seja Bem Vindo</h1>;
  }
  if (loginStatus === false) {
    return <h1>Erro ao Fazer Login</h1>;
  }

  return <></>;
}

export default Message;
