export const GET_WATCHED = "GET_WATCHED";
export const GET_WATCHED_LIST = "GET_WATCHED_LIST";
export const ADD_WATCHED = "ADD_WATCHED";
export const DELETE_WATCHED = "DELETE_WATCHED";
export const UPDATE_WATCHED = "UPDATE_WATCHED";
export const SET_WATCHED = "SET_WATCHED";
export const SET_WATCHED_LIST = "SET_WATCHED_LIST";

export function getWatched(id) {
  return { type: GET_WATCHED, id };
}

export function getWatchedList() {
  return { type: GET_WATCHED_LIST };
}

export function addWatched(watched) {
  return { type: ADD_WATCHED, watched };
}

export function deleteWatched(id) {
  return { type: DELETE_WATCHED, id };
}

export function updateWatched(id, watched) {
  return { type: UPDATE_WATCHED, id, watched };
}
