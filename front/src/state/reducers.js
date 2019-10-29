import { SET_MESSAGE, RESET_MESSAGE, SET_WATCHEDS, SET_TOKEN, RESET_TOKEN } from "./actions";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return { ...state, responseMessage: action.responseMessage };
    case RESET_MESSAGE:
      return { ...state, responseMessage: undefined };
    case SET_WATCHEDS:
      return { ...state, watcheds: action.watcheds };
    case SET_TOKEN:
      return { ...state, token: action.token };
    case RESET_TOKEN:
      return { ...state, token: undefined };
    default:
      return state;
  }
}
