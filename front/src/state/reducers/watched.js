import { SET_WATCHEDS, SET_WATCHED } from "../actions/watched";

function watched(state = {}, action) {
  switch (action.type) {
    case SET_WATCHEDS:
      return { ...state, watcheds: action.watcheds };
    case SET_WATCHED:
      return { ...state, watched: action.watched };
    default:
      return state;
  }
}

export default watched;
