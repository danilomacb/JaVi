export const LOGIN = "LOGIN";
export const SET_TOKEN = "SET_TOKEN";
export const CHECK_TOKEN = "CHECK_TOKEN";
export const RESET_TOKEN = "RESET_TOKEN";

export function login(user) {
  return { type: LOGIN, user };
}

export function checkToken() {
  return { type: CHECK_TOKEN };
}

export function resetToken() {
  return { type: RESET_TOKEN };
}
