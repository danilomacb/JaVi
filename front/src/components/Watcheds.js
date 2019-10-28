import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getWatcheds } from "../state/actions";

function Watcheds({ dispatch }) {
  dispatch(getWatcheds());

  return (
    <>
      <Link to="/add-assistido">Adicionar Novo</Link>
      <h1>Lista de assistidos</h1>
    </>
  );
}

export default connect()(Watcheds);
