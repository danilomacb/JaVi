import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import { getWatched, addWatched, updateWatched } from "../state/actions/watched";

import { getToWatch, addToWatch, updateToWatch } from "../state/actions/toWatch";

class WatchedForm extends Component {
  componentDidMount() {
    if (this.props.match.path === "/assistido/:id") {
      this.props.dispatch(getWatched(this.props.match.params.id));
    }
    if (this.props.match.path === "/para-assistir/:id") {
      this.props.dispatch(getToWatch(this.props.match.params.id));
    }
  }

  render() {
    let temp = {};

    if (this.props.match.path === "/assistido/:id" && this.props.watched) {
      temp = this.props.watched;
    }
    if (this.props.match.path === "/para-assistir/:id" && this.props.toWatch) {
      temp = this.props.toWatch;
    }

    return (
      <Form
        className="my-container my-form"
        onSubmit={event => {
          event.preventDefault();

          temp.name = temp.name.value;
          temp.type = temp.type.value;
          temp.genre = temp.genre.value;
          temp.season = temp.season.value;
          if (
            this.props.match.path === "/add-assistido" ||
            this.props.match.path === "/assistido/:id"
          ) {
            temp.episode = temp.episode.value;
          }
          temp.comment = temp.comment.value;

          switch (this.props.match.path) {
            case "/add-assistido":
              this.props.dispatch(addWatched(temp));
              break;

            case "/assistido/:id":
              this.props.dispatch(updateWatched(this.props.match.params.id, temp));
              break;

            case "/add-para-assistir":
              this.props.dispatch(addToWatch(temp));
              break;

            case "/para-assistir/:id":
              this.props.dispatch(updateToWatch(this.props.match.params.id, temp));
              break;

            default:
              break;
          }
        }}
      >
        <h1 className="mb-4">
          {this.props.match.path === "/add-assistido"
            ? "Adicionar Assistido"
            : this.props.match.path === "/assistido/:id"
            ? "Atualizar Assistido"
            : this.props.match.path === "/add-para-assistir"
            ? "Adicionar Para Assistir"
            : this.props.match.path === "/para-assistir/:id"
            ? "Atualizar Para Assistir"
            : null}
        </h1>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Nome
          </Form.Label>
          <Col sm="10">
            <Form.Control
              required
              type="text"
              defaultValue={temp.name}
              ref={node => {
                temp.name = node;
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
              defaultValue={temp.type}
              ref={node => {
                temp.type = node;
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
              defaultValue={temp.genre}
              ref={node => {
                temp.genre = node;
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Temporada
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              defaultValue={temp.season}
              ref={node => {
                temp.season = node;
              }}
            />
          </Col>
        </Form.Group>
        {this.props.match.path === "/add-assistido" ||
        this.props.match.path === "/assistido/:id" ? (
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Episódio
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                defaultValue={temp.episode}
                ref={node => {
                  temp.episode = node;
                }}
              />
            </Col>
          </Form.Group>
        ) : null}
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Comentário
          </Form.Label>
          <Col sm="10">
            <Form.Control
              as="textarea"
              defaultValue={temp.comment}
              ref={node => {
                temp.comment = node;
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
  return { watched: state.watched.watched, toWatch: state.toWatch.toWatch };
}

export default connect(mapStateToProps)(WatchedForm);
