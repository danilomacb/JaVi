import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }
  componentDidMount() {
    let myMessage = document.getElementById("my-message");

    if (this.props.loginStatus === true) {
      this.setState({ message: "Seja Bem Vindo" });
      myMessage.style.display = "block";
    }
    if (this.props.loginStatus === false) {
      this.setState({ message: "Erro ao Fazer Login" });
      myMessage.style.display = "block";
    }
    if (this.props.registerStatus === true) {
      this.setState({ message: "Conta Criada Com Sucesso" });
      myMessage.style.display = "block";
    }
    if (this.props.registerStatus === false) {
      this.setState({ message: "Erro ao criar conta" });
      myMessage.style.display = "block";
    }
  }

  render() {
    return (
      <div id="my-message">
        <div className="my-message-text">{this.state.message}</div>
        <div className="my-message-x">X</div>
      </div>
    );
  }
}

export default Message;
