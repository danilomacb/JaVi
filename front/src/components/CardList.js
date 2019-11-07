import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Row, Col, ButtonGroup } from "react-bootstrap";

import { getWatcheds, deleteWatched } from "../state/actions/watched";
import { getToWatchList, deleteToWatch } from "../state/actions/toWatch";
import Message from "./Message";

class Watcheds extends Component {
  componentDidMount() {
    if (this.props.match.path === "/assistidos") {
      this.props.dispatch(getWatcheds());
    }
    if (this.props.match.path === "/lista-para-assistir") {
      this.props.dispatch(getToWatchList());
    }
  }

  render() {
    let tempList;

    if (this.props.match.path === "/assistidos") {
      tempList = this.props.watcheds;
    }
    if (this.props.match.path === "/lista-para-assistir") {
      tempList = this.props.toWatchList;
    }

    return (
      <>
        <Message />
        <div className="my-container">
          <h1 className="text-center">
            {this.props.match.path === "/assistidos" ? "Assistidos" : "Para Assistir"}
          </h1>
          <Link
            to={this.props.match.path === "/assistidos" ? "/add-assistido" : "/add-para-assistir"}
          >
            <div className="my-button mb-4 text-center">Adicionar Novo</div>
          </Link>
          {tempList && tempList.length > 0 ? (
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
                            if (this.props.match.path === "/lista-para-assistir") {
                              this.props.dispatch(deleteToWatch(temp._id));
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
          ) : (
            <p>Sua lista esta vazia</p>
          )}
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { watcheds: state.watched.watcheds, toWatchList: state.toWatch.toWatchList };
}

export default connect(mapStateToProps)(Watcheds);
