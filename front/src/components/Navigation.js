import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCheck,
  faList,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

import "../styles/navigation.css";
import { checkToken, resetToken } from "../state/actions/auth";

class Navigation extends Component {
  componentDidMount() {
    this.props.dispatch(checkToken());
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="md" className="my-nav" variant="dark">
        <Link to="/" className="navbar-brand">
          <FontAwesomeIcon icon={faEye} className="mr-1" />
          JaVi?!
        </Link>
        <Navbar.Toggle aria-controls="navigation" />
        <Navbar.Collapse id="navigation">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              <FontAwesomeIcon icon={faHome} className="mr-1" />
              Início
            </Link>
            {this.props.token ? (
              <>
                <Link to="/lista-de-assistidos" className="nav-link">
                  <FontAwesomeIcon icon={faCheck} className="mr-1" />
                  Assistidos
                </Link>
                <Link to="/lista-para-assistir" className="nav-link">
                  <FontAwesomeIcon icon={faList} className="mr-1" />
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
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" />
                Sair
              </Link>
            ) : (
              <>
                <Link to="/cadastrar" className="nav-link">
                  <FontAwesomeIcon icon={faUserPlus} className="mr-1" />
                  Cadastrar
                </Link>
                <Link to="/entrar" className="nav-link">
                  <FontAwesomeIcon icon={faSignInAlt} className="mr-1" />
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

function mapStateToProps(state) {
  return { token: state.auth.token };
}

export default connect(mapStateToProps)(Navigation);
