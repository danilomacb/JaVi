import { connect } from "react-redux";

import Message from "../components/Message";

const mapStateToProps = state => {
  return { loginStatus: state.loginStatus };
};

const MessageContainer = connect(mapStateToProps)(Message);

export default MessageContainer;
