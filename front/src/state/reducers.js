import { SET_MESSAGE, RESET_MESSAGE, SET_WATCHEDS } from "./actions";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return { ...state, responseMessage: action.responseMessage };
    case RESET_MESSAGE:
      return { ...state, responseMessage: undefined };
    case SET_WATCHEDS:
      return { ...state, watcheds: action.watcheds };
    default:
      return state;
  }
}
