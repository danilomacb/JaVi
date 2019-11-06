import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Row, Col, ButtonGroup } from "react-bootstrap";

import { getWatcheds, deleteWatched, getToWatchList } from "../state/actions";
import Message from "./Message";

class Watcheds extends Component {
  componentDidMount() {
    if (this.props.match.path === "/assistidos") {
      this.props.dispatch(getWatcheds());
    }
    if (this.props.match.path === "/para-assistir") {
      this.props.dispatch(getToWatchList());
    }
  }

  render() {
    let tempList;

    if (this.props.match.path === "/assistidos") {
      tempList = this.props.watcheds;
    }
    if (this.props.match.path === "/para-assistir") {
      tempList = this.props.toWatchList;
    }

    if (!tempList || tempList.length === 0) {
      return (
        <div className="my-container">
          <Link to="/add-assistido">Adicionar Novo</Link>
          <h1>Sua lista esta vazia</h1>
        </div>
      );
    }

    return (
      <>
        <Message />
        <div className="my-container">
          <Link
            to={this.props.match.path === "/assistidos" ? "/add-assistido" : "/add-para-assistir"}
          >
            <div className="my-button mb-4 text-center">Adicionar Novo</div>
          </Link>
          <Row>
            {tempList.map((temp, _id) => (
              <Col key={_id} xs={12} sm={6} lg={4} className="mb-4">
                <Card className="my-card">
                  <Card.Header className="my-card-header">{temp.name}</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Tipo: {temp.type} <br />
                      Gênero: {temp.genre} <br />
                      {temp.episode ? "Episódio: " + temp.episode : null}
                    </Card.Text>
                    <ButtonGroup className="w-100">
                      {this.props.match.path === "/assistidos" ? (
                        <Link className="btn my-button" to={"/assistido/" + temp._id}>
                          Editar
                        </Link>
                      ) : (
                        <Link className="btn my-button" to={"/para-assistir/" + temp._id}>
                          Editar
                        </Link>
                      )}

                      <button
                        className="btn my-button"
                        onClick={() => {
                          if (this.props.match.path === "/assistidos") {
                            this.props.dispatch(deleteWatched(temp._id));
                          }
                          if (this.props.match.path === "/para-assistir") {
                            console.log("deletar");
                          }
                        }}
                      >
                        Deletar
                      </button>
                    </ButtonGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { watcheds: state.reducer.watcheds, toWatchList: state.reducer.toWatchList };
}

export default connect(mapStateToProps)(Watcheds);
