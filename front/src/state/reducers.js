import { SET_LOGIN_STATUS, SET_REGISTER_STATUS } from "./actions";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_LOGIN_STATUS:
      return { ...state, loginStatus: action.loginStatus };
    case SET_REGISTER_STATUS:
      return { ...state, registerStatus: action.registerStatus };
    default:
      return state;
  }
}
