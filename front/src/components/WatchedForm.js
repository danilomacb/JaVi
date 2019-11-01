import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import { addWatched, getWatched, updateWatched } from "../state/actions";

class WatchedForm extends Component {
  componentDidMount() {
    if (this.props.match.path === "/assistido/:id") {
      this.props.dispatch(getWatched(this.props.match.params.id));
    }
  }

  render() {
    let watched = {};

    if (this.props.watched) {
      watched = this.props.watched;
    }

    return (
      <Form
        className="my-container my-form"
        onSubmit={event => {
          event.preventDefault();

          watched.name = watched.name.value;
          watched.type = watched.type.value;
          watched.genre = watched.genre.value;
          watched.episode = watched.episode.value;

          if (this.props.match.path === "/add-assistido") {
            this.props.dispatch(addWatched(watched));
          }

          if (this.props.match.path === "/assistido/:id") {
            this.props.dispatch(updateWatched(this.props.match.params.id, watched));
          }
        }}
      >
        <h1 className="mb-4">
          {this.props.match.path === "/assistido/:id" ? "Atualizar" : "Adicionar"} Assistido
        </h1>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Nome
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              defaultValue={watched.name}
              ref={node => {
                watched.name = node;
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Tipo
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              defaultValue={watched.type}
              ref={node => {
                watched.type = node;
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Gênero
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              defaultValue={watched.genre}
              ref={node => {
                watched.genre = node;
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Episódio
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              defaultValue={watched.episode}
              ref={node => {
                watched.episode = node;
              }}
            />
          </Col>
        </Form.Group>
        <button type="submit" className="my-button">
          {this.props.match.path === "/assistido/:id" ? "Atualizar" : "Adicionar"}
        </button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return { watched: state.reducer.watched };
}

export default connect(mapStateToProps)(WatchedForm);
