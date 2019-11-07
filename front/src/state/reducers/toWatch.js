import { SET_TO_WATCH_LIST, SET_TO_WATCH } from "../actions/toWatch";

function toWatch(state = {}, action) {
  switch (action.type) {
    case SET_TO_WATCH_LIST:
      return { ...state, toWatchList: action.toWatchList };
    case SET_TO_WATCH:
      return { ...state, toWatch: action.toWatch };
    default:
      return state;
  }
}

export default toWatch;
