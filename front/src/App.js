import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import UserForm from "./components/UserForm";
import WithAuth from "./components/WithAuth";
import Navigation from "./components/Navigation";
import CardList from "./components/CardList";
import AddForm from "./components/AddForm";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/entrar" component={props => <UserForm {...props} title="Entrar" />} />
          <Route path="/cadastrar" component={props => <UserForm {...props} title="Cadastrar" />} />
          <Route path="/assistidos" component={WithAuth(CardList)} />
          <Route path="/add-assistido" component={WithAuth(AddForm)} />
          <Route path="/assistido/:id" component={WithAuth(AddForm)} />
          <Route path="/para-assistir" component={WithAuth(CardList)} />
          <Route path="/add-para-assistir" component={WithAuth(AddForm)} />
          <Route path="/para-assistir/:id" component={WithAuth(AddForm)} />
        </Switch>
      </div>
    );
  }
}
