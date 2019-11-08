import { all, call, takeEvery, put } from "redux-saga/effects";

import { GET_TO_WATCH, SET_TO_WATCH } from "../../state/actions/toWatch";

function* getToWatch(action) {
  const endpoint = "/to-watch/get/" + action.id;
  const response = yield call(fetch, endpoint);

  const toWatch = yield response.json();
  yield put({ type: SET_TO_WATCH, toWatch });
}

function* getAction() {
  yield takeEvery(GET_TO_WATCH, getToWatch);
}

export default function* runGetToWatch() {
  yield all([getAction()]);
}
