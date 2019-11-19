import React, { Component } from "react";
import { connect } from "react-redux";

import CardList from "../components/CardList";
import { checkToken } from "../state/actions/auth";
import { getWatchedList } from "../state/actions/watched";
import { getToWatchList } from "../state/actions/toWatch";

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

  componentDidUpdate() {
    if (!this.props.token) {
      return this.props.history.push("/entrar");
    }
  }

  render() {
    if (this.props.match.path === "/lista-de-assistidos" && this.props.watchedList) {
      return (
        <CardList
          tempList={this.props.watchedList}
          loaded={false}
          title={"Assistidos"}
          add={"/add-assistido"}
          update={"/assistido/"}
        />
      );
    }
    if (this.props.match.path === "/lista-para-assistir" && this.props.toWatchList) {
      return (
        <CardList
          tempList={this.props.toWatchList}
          loaded={false}
          title={"Para Assistir"}
          add={"/add-para-assistir"}
          update={"/para-assistir/"}
        />
      );
    }

    return null;
  }
}

export default connect(mapStateToProps)(CardListContainer);
