import { all, call, takeEvery, put } from "redux-saga/effects";

import { GET_WATCHEDS, SET_WATCHEDS } from "../../state/actions/watched";

function* getWatcheds() {
  const endpoint = "/watched/get-all";
  const response = yield call(fetch, endpoint);

  const watcheds = yield response.json();
  yield put({ type: SET_WATCHEDS, watcheds });
}

function* getAction() {
  yield takeEvery(GET_WATCHEDS, getWatcheds);
}

export default function* runGetWatcheds() {
  yield all([getAction()]);
}
