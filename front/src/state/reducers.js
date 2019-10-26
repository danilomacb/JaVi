import { SET_MESSAGE } from "./actions";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return { ...state, responseMessage: action.responseMessage };
    default:
      return state;
  }
}
