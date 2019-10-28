import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import UserForm from "./components/UserForm";
import WithAuth from "./components/WithAuth";
import Navigation from "./components/Navigation";
import WatchedsContainer from "./containers/WatchedsContainer";
import WatchedForm from "./components/WatchedForm";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/entrar" component={props => <UserForm {...props} title="Entrar" />} />
          <Route path="/cadastrar" component={props => <UserForm {...props} title="Cadastrar" />} />
          <Route path="/assistidos" component={WithAuth(WatchedsContainer)} />
          <Route path="/add-assistido" component={WatchedForm} />
          {/* <Route path="/add-para-assistir" component={} />
          <Route path="/para-assistir" component={} /> */}
        </Switch>
      </div>
    );
  }
}
