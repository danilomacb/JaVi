import { all, call, takeEvery } from "redux-saga/effects";
import { GET_WATCHED } from "../state/actions";

function* getWatched(action) {
  const endpoint = "/watched/get/" + action.id;
  yield call(fetch, endpoint);
}

function* getAction() {
  yield takeEvery(GET_WATCHED, getWatched);
}

export default function* runGetWatched() {
  yield all([getAction()]);
}
