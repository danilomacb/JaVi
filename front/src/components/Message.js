import React, { Component } from "react";
import { connect } from "react-redux";

import { resetMessage } from "../state/actions";

class Message extends Component {
  componentWillUnmount() {
    this.props.dispatch(resetMessage());
  }

  hide() {
    document.getElementById("my-message").style.display = "none";
  }

  render() {
    return (
      <>
        {this.props.responseMessage ? (
          <div id="my-message" onClick={this.hide}>
            <div className="my-message-text">{this.props.responseMessage}</div>
            <div className="my-message-x">x</div>
          </div>
        ) : null}
      </>
    );
  }
}

function mapStateToProps(state) {
  return { responseMessage: state.reducer.responseMessage };
}

export default connect(mapStateToProps)(Message);
