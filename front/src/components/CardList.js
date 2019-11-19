import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Row, Col, ButtonGroup, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "../styles/cardList.css";

import { deleteWatched } from "../state/actions/watched";
import { deleteToWatch } from "../state/actions/toWatch";
import Message from "./Message";

class WatchedList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempList: this.props.tempList,
      emptyList: "Sua lista está vazia"
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.tempList !== nextProps.tempList) {
      this.setState({ tempList: nextProps.tempList, emptyList: "Sua lista está vazia" });
    }
  }

  setSearch(search) {
    if (search === "") {
      return this.setState({ tempList: this.props.tempList });
    }

    let find = this.props.tempList.filter(data => {
      let regex = new RegExp(`^${search}`, "gi");
      return data.name.match(regex);
    });

    if (find.length === 0) {
      return this.setState({ tempList: find, emptyList: "Nenhum resultado encontrado" });
    }

    return this.setState({ tempList: find });
  }

  render() {
    let search;

    return (
      <>
        <Message />
        <div className="my-container">
          <h1 className="text-center">{this.props.title}</h1>
          <Link to={this.props.add}>
            <div className="my-button mb-4 text-center">
              <FontAwesomeIcon icon={faPlusSquare} className="mr-1" />
              Adicionar Novo
            </div>
          </Link>
          {this.props.tempList && this.props.tempList.length > 0 ? (
            <Form
              className="mb-4"
              onSubmit={e => {
                e.preventDefault();

                search = search.value;

                this.setSearch(search);
              }}
            >
              <Form.Group>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Pesquisar"
                    ref={node => {
                      search = node;
                    }}
                  />
                  <InputGroup.Append>
                    <button type="submit" className="my-append-button">
                      <FontAwesomeIcon icon={faSearch} className="mx-3" />
                    </button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Form>
          ) : null}

          {this.state.tempList && this.state.tempList.length > 0 ? (
            <>
              <Row>
                {this.state.tempList.map((temp, _id) => (
                  <Col key={_id} xs={12} sm={6} lg={4} className="mb-4">
                    <Card className="my-card">
                      <Card.Header className="my-card-header">{temp.name}</Card.Header>
                      <Card.Body>
                        <div>
                          {temp.season ? (
                            <p className="my-card-content">Temporada: {temp.season}</p>
                          ) : null}
                          {temp.episode ? (
                            <p className="my-card-content">Episódio: {temp.episode}</p>
                          ) : null}
                          {temp.time ? <p className="my-card-content">Tempo: {temp.time}</p> : null}
                          {temp.link ? (
                            temp.link.charAt(0) === "h" ? (
                              <a href={temp.link} target="__blank" className="my-card-content">
                                Link: {temp.link}
                              </a>
                            ) : (
                              <a
                                href={"//" + temp.link}
                                target="__blank"
                                className="my-card-content"
                              >
                                Link: {temp.link}
                              </a>
                            )
                          ) : null}
                        </div>
                        <ButtonGroup className="w-100">
                          <Link className="btn my-button" to={this.props.update + temp._id}>
                            <FontAwesomeIcon icon={faEdit} className="mr-1" />
                            Editar
                          </Link>

                          <button
                            className="btn my-button"
                            onClick={() => {
                              if (this.props.title === "Assistidos") {
                                this.props.dispatch(deleteWatched(temp._id));
                              }
                              if (this.props.title === "Para Assistir") {
                                this.props.dispatch(deleteToWatch(temp._id));
                              }
                            }}
                          >
                            <FontAwesomeIcon icon={faTrashAlt} className="mr-1" />
                            Deletar
                          </button>
                        </ButtonGroup>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </>
          ) : (
            <p>{this.state.emptyList}</p>
          )}
        </div>
      </>
    );
  }
}

export default connect()(WatchedList);
