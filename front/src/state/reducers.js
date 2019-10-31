import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import {
  SET_MESSAGE,
  RESET_MESSAGE,
  SET_WATCHEDS,
  SET_WATCHED,
  SET_TOKEN,
  RESET_TOKEN
} from "./actions";

function reducer(state = {}, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return { ...state, responseMessage: action.responseMessage };
    case RESET_MESSAGE:
      return { ...state, responseMessage: undefined };
    case SET_WATCHEDS:
      return { ...state, watcheds: action.watcheds };
    case SET_WATCHED:
      return { ...state, watched: action.watched };
    case SET_TOKEN:
      return { ...state, token: action.token };
    case RESET_TOKEN:
      return { ...state, token: undefined };
    default:
      return state;
  }
}

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    reducer
  });

export default createRootReducer;
