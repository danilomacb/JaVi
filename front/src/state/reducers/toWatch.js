import { SET_TO_WATCH, SET_TO_WATCH_LIST } from "../actions/toWatch";
import { LOGOUT } from "../actions/auth";

function toWatch(state = {}, action) {
  switch (action.type) {
    case SET_TO_WATCH:
      return { ...state, toWatch: action.toWatch };
    case SET_TO_WATCH_LIST:
      return { ...state, toWatchList: action.toWatchList };
    case LOGOUT:
      return { ...state, toWatch: undefined, toWatchList: undefined };
    default:
      return state;
  }
}

export default toWatch;
