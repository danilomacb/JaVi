import { SET_TOKEN, LOGOUT } from "../actions/auth";

function auth(state = {}, action) {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.token };
    case LOGOUT:
      return { ...state, token: undefined };
    default:
      return state;
  }
}

export default auth;
