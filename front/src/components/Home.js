import React from "react";

import MessageContainer from "../containers/MessageContainer";

function Home() {
  return (
    <>
      <MessageContainer />
      <div className="my-container my-home">
        <h1 className="text-center">Afinal, pra que serve isso?</h1>
        <p>
          Você já se perguntou se já viu um filme, ou um episódio de série/anime? Com diferentes
          plataformas de streaming fica difícil lembrar de todos eles não é mesmo? A proposta do
          JaVi?! é deixar salvo em uma única plataforma o que você já assistiu, ou que quer assistir
          depois, de forma simples e prática.
        </p>
      </div>
    </>
  );
}

export default Home;
