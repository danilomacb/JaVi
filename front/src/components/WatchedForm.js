import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import { addWatched } from "../state/actions";

class WatchedForm extends Component {
  render() {
    let watched = {};

    return (
      <Form
        className="my-container my-userform"
        onSubmit={event => {
          event.preventDefault();

          watched.name = watched.name.value;
          watched.type = watched.type.value;
          watched.genre = watched.genre.value;
          watched.episode = watched.episode.value;

          this.props.dispatch(addWatched(watched));
        }}
      >
        <h1 className="mb-4">Adicionar Assistido</h1>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Nome
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
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
              ref={node => {
                watched.episode = node;
              }}
            />
          </Col>
        </Form.Group>
        <button type="submit" className="my-button">
          Entrar
        </button>
      </Form>
    );
  }
}

export default connect()(WatchedForm);
