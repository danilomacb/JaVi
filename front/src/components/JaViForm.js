import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";

class JaViForm extends Component {
  render() {
    let javi = {};

    return (
      <Form
        className="my-container my-userform"
        onSubmit={event => {
          event.preventDefault();

          javi.name = javi.name.value;
          javi.type = javi.type.value;
          javi.genre = javi.genre.value;
          javi.episode = javi.episode.value;

          fetch("/javi/new", {
            method: "POST",
            body: JSON.stringify(javi),
            headers: {
              "Content-Type": "application/json"
            }
          });
        }}
      >
        <h1 className="mb-4">Novo JaVi</h1>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Nome
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              ref={node => {
                javi.name = node;
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
                javi.type = node;
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
                javi.genre = node;
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
              type="number"
              ref={node => {
                javi.episode = node;
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

export default JaViForm;
