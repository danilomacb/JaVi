import { SET_LOGIN_STATUS } from "./actions";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_LOGIN_STATUS:
      return { ...state, loginStatus: action.loginStatus };
    default:
      return state;
  }
}
