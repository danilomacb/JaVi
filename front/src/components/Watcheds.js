import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getWatcheds } from "../state/actions";

class Watcheds extends Component {
  componentDidMount() {
    this.props.dispatch(getWatcheds());
  }

  render() {
    console.log(this.props.watcheds);

    return (
      <>
        <Link to="/add-assistido">Adicionar Novo</Link>
        <h1>Lista de assistidos</h1>
      </>
    );
  }
}

export default connect()(Watcheds);
