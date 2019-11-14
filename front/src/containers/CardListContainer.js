import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import CardList from "../components/CardList";
import { checkToken } from "../state/actions/auth";
import { getWatchedList, deleteWatched } from "../state/actions/watched";
import { getToWatchList, deleteToWatch } from "../state/actions/toWatch";

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    watchedList: state.watched.watchedList,
    toWatchList: state.toWatch.toWatchList
  };
}

class CardListContainer extends Component {
  constructor(props) {
    super(props);

    this.props.dispatch(checkToken());
    this.props.dispatch(getWatchedList());
    this.props.dispatch(getToWatchList());
  }

  render() {
    if (!this.props.token) {
      return <Redirect to="/entrar" />;
    }

    if (this.props.match.path === "/lista-de-assistidos" && this.props.watchedList) {
      return (
        <CardList match={this.props.match} tempList={this.props.watchedList} title={"Assistidos"} />
      );
    }
    if (this.props.match.path === "/lista-para-assistir" && this.props.toWatchList) {
      return (
        <CardList
          match={this.props.match}
          tempList={this.props.toWatchList}
          title={"Para Assistir"}
        />
      );
    }
    return null;
  }
}

export default connect(mapStateToProps)(CardListContainer);
