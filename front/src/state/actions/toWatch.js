export const GET_TO_WATCH = "GET_TO_WATCH";
export const GET_TO_WATCH_LIST = "GET_TO_WATCH_LIST";
export const ADD_TO_WATCH = "ADD_TO_WATCH";
export const DELETE_TO_WATCH = "DELETE_TO_WATCH";
export const UPDATE_TO_WATCH = "UPDATE_TO_WATCH";
export const SET_TO_WATCH = "SET_TO_WATCH";
export const SET_TO_WATCH_LIST = "SET_TO_WATCH_LIST";

export function getToWatch(id) {
  return { type: GET_TO_WATCH, id };
}

export function getToWatchList() {
  return { type: GET_TO_WATCH_LIST };
}

export function addToWatch(toWatch) {
  return { type: ADD_TO_WATCH, toWatch };
}

export function deleteToWatch(id) {
  return { type: DELETE_TO_WATCH, id };
}

export function updateToWatch(id, toWatch) {
  return { type: UPDATE_TO_WATCH, id, toWatch };
}
