import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Secret from "./components/Secret";
import UserForm from "./components/UserForm";
import WithAuth from "./components/WithAuth";
import Navigation from "./components/Navigation";
import Watched from "./components/Watched";
import WatchedForm from "./components/WatchedForm";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/segredo" component={WithAuth(Secret)} />
          <Route path="/entrar" component={props => <UserForm {...props} title="Entrar" />} />
          <Route path="/cadastrar" component={props => <UserForm {...props} title="Cadastrar" />} />
          <Route path="/assistidos" component={Watched} />
          <Route path="/add-assistido" component={WatchedForm} />
          {/* <Route path="/add-para-assistir" component={} />
          <Route path="/para-assistir" component={} /> */}
        </Switch>
      </div>
    );
  }
}
