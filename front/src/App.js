import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Secret from "./components/Secret";
import UserForm from "./components/UserForm";
import WithAuth from "./components/WithAuth";
import Navigation from "./components/Navigation";
import JaViForm from "./components/JaViForm";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/segredo" component={WithAuth(Secret)} />
          <Route path="/entrar" component={UserForm} />
          <Route path="/cadastrar" component={UserForm} />
          <Route path="/novo-javi" component={JaViForm} />
        </Switch>
      </div>
    );
  }
}
