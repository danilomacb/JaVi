export const SET_MESSAGE = "SET_MESSAGE";
export const RESET_MESSAGE = "RESET_MESSAGE";
export const ADD_WATCHED = "ADD_WATCHED";
export const ADD_USER = "ADD_USER";
export const LOGIN = "LOGIN";
export const GET_WATCHEDS = "GET_WATCHEDS";
export const SET_WATCHEDS = "SET_WATCHEDS";
export const SET_TOKEN = "SET_TOKEN";
export const RESET_TOKEN = "RESET_TOKEN";
export const CHECK_TOKEN = "CHECK_TOKEN";

export function setMessage(responseMessage) {
  return { type: SET_MESSAGE, responseMessage };
}

export function resetMessage() {
  return { type: SET_MESSAGE };
}

export function addWatched(watched) {
  return { type: ADD_WATCHED, watched };
}

export function addUser(user) {
  return { type: ADD_USER, user };
}

export function login(user) {
  return { type: LOGIN, user };
}

export function getWatcheds() {
  return { type: GET_WATCHEDS };
}

export function checkToken() {
  return { type: CHECK_TOKEN };
}
