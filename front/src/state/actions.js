export const SET_MESSAGE = "SET_MESSAGE";
export const RESET_MESSAGE = "RESET_MESSAGE";
export const ADD_WATCHED = "ADD_WATCHED";

export function setMessage(responseMessage) {
  return { type: SET_MESSAGE, responseMessage };
}

export function resetMessage() {
  return { type: SET_MESSAGE };
}

export function addWatched(watched) {
  return { type: ADD_WATCHED, watched };
}
