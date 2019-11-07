export const GET_WATCHED = "GET_WATCHED";
export const GET_WATCHEDS = "GET_WATCHEDS";
export const ADD_WATCHED = "ADD_WATCHED";
export const DELETE_WATCHED = "DELETE_WATCHED";
export const UPDATE_WATCHED = "UPDATE_WATCHED";
export const SET_WATCHED = "SET_WATCHED";
export const SET_WATCHEDS = "SET_WATCHEDS";

export function getWatched(id) {
  return { type: GET_WATCHED, id };
}

export function getWatcheds() {
  return { type: GET_WATCHEDS };
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
