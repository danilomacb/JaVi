import React, { Component } from "react";
import { connect } from "react-redux";

import { resetMessage } from "../state/actions";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: this.props.responseMessage
    };
  }
  componentDidUpdate() {
    document.getElementById("my-message").style.display = "block";
  }
  componentWillUnmount() {
    this.props.dispatch(resetMessage());
  }

  hide() {
    document.getElementById("my-message").style.display = "none";
  }

  render() {
    return (
      <div id="my-message" onClick={this.hide}>
        <div className="my-message-text">{this.props.responseMessage}</div>
        <div className="my-message-x">x</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { responseMessage: state.reducer.responseMessage };
}

export default connect(mapStateToProps)(Message);
