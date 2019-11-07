import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { SET_TOKEN, RESET_TOKEN } from "./actions/auth";
import { SET_MESSAGE, RESET_MESSAGE } from "./actions/message";
import { SET_WATCHEDS, SET_WATCHED } from "./actions/watched";
import { SET_TO_WATCH_LIST, SET_TO_WATCH } from "./actions/toWatch";

function reducer(state = {}, action) {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.token };
    case RESET_TOKEN:
      return { ...state, token: undefined };
    case SET_MESSAGE:
      return { ...state, responseMessage: action.responseMessage };
    case RESET_MESSAGE:
      return { ...state, responseMessage: undefined };
    case SET_WATCHEDS:
      return { ...state, watcheds: action.watcheds };
    case SET_WATCHED:
      return { ...state, watched: action.watched };
    case SET_TO_WATCH_LIST:
      return { ...state, toWatchList: action.toWatchList };
    case SET_TO_WATCH:
      return { ...state, toWatch: action.toWatch };
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
