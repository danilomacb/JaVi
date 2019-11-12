import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/message.css";
import { resetMessage } from "../state/actions/message";

class Message extends Component {
  componentWillUnmount() {
    this.props.dispatch(resetMessage());
  }

  hide() {
    document.getElementById("my-message").style.display = "none";
    this.props.dispatch(resetMessage());
  }

  render() {
    return (
      <>
        {this.props.responseMessage ? (
          <div id="my-message" onClick={this.hide.bind(this)}>
            <div className="my-message-text">{this.props.responseMessage}</div>
            <div className="my-message-x">x</div>
          </div>
        ) : null}
      </>
    );
  }
}

function mapStateToProps(state) {
  return { responseMessage: state.message.responseMessage };
}

export default connect(mapStateToProps)(Message);
