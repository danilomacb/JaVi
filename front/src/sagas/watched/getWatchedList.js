import { all, call, takeEvery, put } from "redux-saga/effects";

import { GET_WATCHED_LIST, SET_WATCHED_LIST } from "../../state/actions/watched";

function* getWatchedList() {
  const endpoint = "/watched/get-all";
  const response = yield call(fetch, endpoint);

  const watchedList = yield response.json();
  yield put({ type: SET_WATCHED_LIST, watchedList });
}

function* getAction() {
  yield takeEvery(GET_WATCHED_LIST, getWatchedList);
}

export default function* runGetWatchedList() {
  yield all([getAction()]);
}
