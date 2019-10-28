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
        <div className="my-container">
          <Link to="/add-assistido">Adicionar Novo</Link>
          <h1>Sua lista esta vazia</h1>
        </div>
      );
    }

    return (
      <div className="my-container">
        <Link to="/add-assistido">
          <div className="my-button mb-4 text-center">Adicionar Novo</div>
        </Link>
        {this.props.watcheds.map((element, _id) => (
          <Link to="#" key={_id}>
            <div className="my-item">
              <div className="my-item-name">Nome: {element.name}</div>
              <div className="my-item-episode">Episódio: {element.episode}</div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default connect()(Watcheds);
