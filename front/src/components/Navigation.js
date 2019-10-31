import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import { checkToken, resetToken } from "../state/actions";

class Navigation extends Component {
  componentDidMount() {
    this.props.dispatch(checkToken());
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="md" className="my-nav" variant="dark">
        <Link to="/" className="navbar-brand">
          JaVi?!
        </Link>
        <Navbar.Toggle aria-controls="navigation" />
        <Navbar.Collapse id="navigation">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Início
            </Link>
            {this.props.token ? (
              <>
                <Link to="/assistidos" className="nav-link">
                  Assistidos
                </Link>
                <Link to="/#" className="nav-link">
                  Para Assistir
                </Link>
              </>
            ) : null}
          </Nav>
          <Nav>
            {this.props.token ? (
              <Link
                to="/"
                onClick={() => {
                  this.props.dispatch(resetToken());
                  return (document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;");
                }}
              >
                Sair
              </Link>
            ) : (
              <>
                <Link to="/cadastrar" className="nav-link">
                  Cadastrar
                </Link>
                <Link to="/entrar" className="nav-link">
                  Entrar
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
