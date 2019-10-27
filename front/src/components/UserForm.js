import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import UserFormTitle from "./UserFormTitle";
import { addUser, login } from "../state/actions";

function UserForm({ history, match, dispatch }) {
  let user = {};

  return (
    <Form
      className="my-container my-userform"
      onSubmit={event => {
        event.preventDefault();

        user.email = user.email.value;
        user.password = user.password.value;

        if (match.path === "/entrar") {
          dispatch(login(user));
          history.push("/");
        }

        if (match.path === "/cadastrar") {
          dispatch(addUser(user));
          history.push("/");
        }
      }}
    >
      <UserFormTitle match={match} />
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

export default connect()(UserForm);
