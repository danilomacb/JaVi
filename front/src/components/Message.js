import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: this.props.responseMessage
    };
  }
  componentDidUpdate() {
    let myMessage = document.getElementById("my-message");

    if (this.props.responseMessage) {
      myMessage.style.display = "block";
    }
  }

  render() {
    return (
      <div id="my-message">
        <div className="my-message-text">{this.props.responseMessage}</div>
        <div className="my-message-x">X</div>
      </div>
    );
  }
}

export default Message;
