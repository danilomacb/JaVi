export const SET_LOGIN_STATUS = "SET_LOGIN_STATUS";
export const SET_REGISTER_STATUS = "SET_REGISTER_STATUS";

export function setLoginStatus(loginStatus) {
  return {
    type: SET_LOGIN_STATUS,
    loginStatus
  };
}

export function setRegisterStatus(registerStatus) {
  return {
    type: SET_REGISTER_STATUS,
    registerStatus
  };
}
