import { SET_TOKEN, RESET_TOKEN } from "../actions/auth";

function auth(state = {}, action) {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.token };
    case RESET_TOKEN:
      return { ...state, token: undefined };
    default:
      return state;
  }
}

export default auth;
