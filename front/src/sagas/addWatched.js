import { all, call, takeEvery } from "redux-saga/effects";
import { ADD_WATCHED } from "../state/actions";

function* addWatched(action) {
  const endpoint = "/watched/new";
  yield call(fetch, endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(action.watched)
  });
}

function* getAction() {
  yield takeEvery(ADD_WATCHED, addWatched);
}

export default function* runAddWatched() {
  yield all([getAction()]);
}
