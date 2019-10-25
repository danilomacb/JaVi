export const SET_LOGIN_STATUS = "SET_LOGIN_STATUS";

export function loginStatus(loginStatus) {
  return {
    type: SET_LOGIN_STATUS,
    loginStatus: loginStatus
  };
}
