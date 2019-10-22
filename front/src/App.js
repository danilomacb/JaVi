import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Secret from "./components/Secret";
import Login from "./components/Login";

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/secret">Secret</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/secret" component={Secret} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}
