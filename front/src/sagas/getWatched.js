import { all, call, takeEvery, put } from "redux-saga/effects";

import { GET_WATCHED, SET_WATCHED } from "../state/actions/watched";

function* getWatched(action) {
  const endpoint = "/watched/get/" + action.id;
  const response = yield call(fetch, endpoint);

  const watched = yield response.json();
  yield put({ type: SET_WATCHED, watched });
}

function* getAction() {
  yield takeEvery(GET_WATCHED, getWatched);
}

export default function* runGetWatched() {
  yield all([getAction()]);
}
