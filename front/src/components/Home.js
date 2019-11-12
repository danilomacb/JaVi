import React from "react";

import Message from "../components/Message";

function Home() {
  return (
    <>
      <Message />
      <div className="my-container">
        <h1 className="text-center">Seja Bem Vindo!</h1>
        <p>
          O JaVi?! é uma plataforma que tem como objetivo deixar salvo de forma simples e prática
          quais conteúdos você ja viu, e quais você quer ver, em um único lugar. Sejam eles filmes,
          séries, animes, ou o que mais você desejar.
        </p>
        <h1 className="text-center mt-5">Como Utilizar?</h1>
        <p>
          Primeiro você precisa criar uma conta, depois fazer login, logo após irão aparecer no menu
          de cima as opções para salvar conteúdos que já foram assistidos e conteúdos para assistir
          depois. Clicando em qualquer uma delas irá aparecer na tela uma opção para adcionar
          conteúdo. É importante ressaltar que somente o nome é obrigatório, os campos restantes
          podem ficar vazios. Todos os campos aceitam tanto caracteres numéricos quanto alfabéticos,
          sinta-se livre para deixar salvo da forma que achar melhor.
        </p>
      </div>
    </>
  );
}

export default Home;
