import { connect } from "react-redux";

import Message from "../components/Message";

const mapStateToProps = state => {
  return { loginStatus: state.loginStatus, registerStatus: state.registerStatus };
};

const MessageContainer = connect(mapStateToProps)(Message);

export default MessageContainer;
