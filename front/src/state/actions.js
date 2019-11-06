export const SET_MESSAGE = "SET_MESSAGE";
export const RESET_MESSAGE = "RESET_MESSAGE";
export const ADD_USER = "ADD_USER";
export const LOGIN = "LOGIN";
export const GET_WATCHEDS = "GET_WATCHEDS";
export const SET_WATCHEDS = "SET_WATCHEDS";
export const GET_WATCHED = "GET_WATCHED";
export const SET_WATCHED = "SET_WATCHED";
export const ADD_WATCHED = "ADD_WATCHED";
export const DELETE_WATCHED = "DELETE_WATCHED";
export const UPDATE_WATCHED = "UPDATE_WATCHED";
export const SET_TOKEN = "SET_TOKEN";
export const RESET_TOKEN = "RESET_TOKEN";
export const CHECK_TOKEN = "CHECK_TOKEN";
export const GET_TO_WATCH_LIST = "GET_TO_WATCH_LIST";
export const SET_TO_WATCH_LIST = "SET_TO_WATCH_LIST";

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

export function resetToken() {
  return { type: RESET_TOKEN };
}

export function deleteWatched(id) {
  return { type: DELETE_WATCHED, id };
}

export function getWatched(id) {
  return { type: GET_WATCHED, id };
}

export function updateWatched(id, watched) {
  return { type: UPDATE_WATCHED, id, watched };
}

export function getToWatchList() {
  return { type: GET_TO_WATCH_LIST };
}
