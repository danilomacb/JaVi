import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import { checkToken } from "../state/actions";
import NavigationLinks from "./NavigationLinks";

class Navigation extends Component {
  componentDidMount() {
    this.props.dispatch(checkToken());
  }

  render() {
    console.log(this.props.token);
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
            <NavigationLinks token={this.props.token} />
          </Nav>
          <Nav>
            <Link to="/cadastrar" className="nav-link">
              Cadastrar
            </Link>
            <Link to="/entrar" className="nav-link">
              Entrar
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
