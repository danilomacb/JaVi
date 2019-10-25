import React from "react";

function Message({ loginStatus, registerStatus }) {
  if (loginStatus === true) {
    return <h1>Seja Bem Vindo</h1>;
  }
  if (loginStatus === false) {
    return <h1>Erro ao Fazer Login</h1>;
  }
  if (registerStatus === true) {
    return <h1>Conta Criada Com Sucesso</h1>;
  }
  if (registerStatus === false) {
    return <h1>Erro ao criar conta</h1>;
  }

  return <></>;
}

export default Message;
