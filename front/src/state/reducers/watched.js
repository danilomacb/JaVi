import { SET_WATCHED, SET_WATCHED_LIST } from "../actions/watched";

function watched(state = {}, action) {
  switch (action.type) {
    case SET_WATCHED:
      return { ...state, watched: action.watched };
    case SET_WATCHED_LIST:
      return { ...state, watchedList: action.watchedList };
    default:
      return state;
  }
}

export default watched;
