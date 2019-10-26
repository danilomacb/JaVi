import { SET_MESSAGE, RESET_MESSAGE } from "./actions";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return { ...state, responseMessage: action.responseMessage };
    case RESET_MESSAGE:
      return { ...state, responseMessage: undefined };
    default:
      return state;
  }
}
