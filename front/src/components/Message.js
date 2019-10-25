import React from "react";

function Message({ loginStatus }) {
  if (loginStatus === true) {
    return <h1>Sucesso</h1>;
  }
  if (loginStatus === false) {
    return <h1>Erro</h1>;
  }

  return <></>;
}

export default Message;
