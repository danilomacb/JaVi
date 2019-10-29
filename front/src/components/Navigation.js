import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import { checkToken } from "../state/actions";
import NavigationLinks from "./NavigationLinks";
import NavigationAuth from "./NavigationAuth";

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
            <NavigationLinks token={this.props.token} />
          </Nav>
          <Nav>
            <NavigationAuth token={this.props.token} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
