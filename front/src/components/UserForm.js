import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import { addUser, login } from "../state/actions";

class UserForm extends Component {
  render() {
    let user = {};

    return (
      <Form
        className="my-container my-userform"
        onSubmit={event => {
          event.preventDefault();

          user.email = user.email.value;
          user.password = user.password.value;

          if (this.props.match.path === "/entrar") {
            this.props.dispatch(login(user));
            this.props.history.push("/");
          }

          if (this.props.match.path === "/cadastrar") {
            this.props.dispatch(addUser(user));
            this.props.history.push("/");
          }
        }}
      >
        <h1 className="mb-4">{this.props.title}</h1>
        <Form.Group as={Row} controlId="formGroupEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              placeholder="Email"
              ref={node => {
                user.email = node;
              }}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formGroupPassword">
          <Form.Label column sm="2">
            Senha
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Senha"
              ref={node => {
                user.password = node;
              }}
              required
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

export default connect()(UserForm);
