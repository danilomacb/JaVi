import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Secret from "./components/Secret";
import Login from "./components/Login";
import WithAuth from "./components/WithAuth";
import Navigation from "./components/Navigation";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/secret" component={WithAuth(Secret)} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}
