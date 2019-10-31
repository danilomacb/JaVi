import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";

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
        <Row>
          {this.props.watcheds.map((element, _id) => (
            <Col xs={12} sm={6} lg={4} className="mb-4">
              <Card key={_id} className="my-card">
                <Card.Header className="my-card-header">{element.name}</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Tipo: {element.type} <br />
                    Gênero: {element.genre} <br />
                    {element.episode ? "Episódio: " + element.episode : null}
                  </Card.Text>
                  <Link to="#">
                    <button className="my-button">Editar</button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { watcheds: state.reducer.watcheds };
}

export default connect(mapStateToProps)(Watcheds);
