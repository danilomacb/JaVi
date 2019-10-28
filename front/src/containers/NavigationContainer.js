import { connect } from "react-redux";

import Navigation from "../components/Navigation";

const mapStateToProps = state => {
  return { token: state.token };
};

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;
