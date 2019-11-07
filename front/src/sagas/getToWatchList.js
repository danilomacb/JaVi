import { all, call, takeEvery, put } from "redux-saga/effects";

import { GET_TO_WATCH_LIST, SET_TO_WATCH_LIST } from "../state/actions/toWatch";

function* getToWatchList() {
  const endpoint = "/to-watch/get-all";
  const response = yield call(fetch, endpoint);

  const toWatchList = yield response.json();
  yield put({ type: SET_TO_WATCH_LIST, toWatchList });
}

function* getAction() {
  yield takeEvery(GET_TO_WATCH_LIST, getToWatchList);
}

export default function* runGetToWatchList() {
  yield all([getAction()]);
}
