import { SET_WATCHED, SET_WATCHED_LIST } from "../actions/watched";
import { LOGOUT } from "../actions/auth";

function watched(state = {}, action) {
  switch (action.type) {
    case SET_WATCHED:
      return { ...state, watched: action.watched };
    case SET_WATCHED_LIST:
      return { ...state, watchedList: action.watchedList };
    case LOGOUT:
      return { ...state, watched: undefined, watchedList: undefined };
    default:
      return state;
  }
}

export default watched;
