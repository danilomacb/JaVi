import { all, call, takeEvery } from "redux-saga/effects";
import { GET_WATCHEDS } from "../state/actions";

function* getWatcheds() {
  const endpoint = "/watched/get-all";
  const response = yield call(fetch, endpoint);
  const watcheds = yield response.json();
  console.log(watcheds);
}

function* getAction() {
  yield takeEvery(GET_WATCHEDS, getWatcheds);
}

export default function* runGetWatcheds() {
  yield all([getAction()]);
}
