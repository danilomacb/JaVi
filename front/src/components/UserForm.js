import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import UserFormTitle from "./UserFormTitle";
import { setLoginStatus, setRegisterStatus } from "../state/actions";

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
          fetch("/user/authenticate", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(res => {
              if (res.status === 200) {
                dispatch(setLoginStatus(true));
                history.push("/");
              } else {
                dispatch(setLoginStatus(false));
                history.push("/");
              }
            })
            .catch(err => {
              console.error(err);
            });
        }

        if (match.path === "/cadastrar") {
          fetch("/user/register", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(res => {
              if (res.status === 200) {
                dispatch(setRegisterStatus(true));
                history.push("/");
              } else {
                dispatch(setRegisterStatus(false));
                history.push("/");
              }
            })
            .catch(err => {
              console.error(err);
            });
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
