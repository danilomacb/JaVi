import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import toWatch from "./toWatch";
import watched from "./watched";
import message from "./message";
import auth from "./auth";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    toWatch,
    watched,
    message,
    auth
  });

export default createRootReducer;
