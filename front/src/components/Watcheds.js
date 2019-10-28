import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getWatcheds } from "../state/actions";

class Watcheds extends Component {
  componentDidMount() {
    this.props.dispatch(getWatcheds());
  }

  render() {
    if (!this.props.watcheds || this.props.watcheds.length === 0) {
      return (
        <>
          <Link to="/add-assistido">Adicionar Novo</Link>
          <h1>Sua lista esta vazia</h1>
        </>
      );
    }

    return (
      <>
        <Link to="/add-assistido">Adicionar Novo</Link>
        {this.props.watcheds.map((element, _id) => (
          <h1 key={_id}>{element.name}</h1>
        ))}
      </>
    );
  }
}

export default connect()(Watcheds);
