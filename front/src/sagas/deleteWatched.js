import { all, call, takeEvery, put } from "redux-saga/effects";
import { DELETE_WATCHED, GET_WATCHEDS } from "../state/actions";

function* deleteWatched(action) {
  const endpoint = "/watched/delete/" + action.id;
  const response = yield call(fetch, endpoint, { method: "DELETE" });

  if (response.status === 200) {
    yield put({ type: GET_WATCHEDS });
  }
}

function* getAction() {
  yield takeEvery(DELETE_WATCHED, deleteWatched);
}

export default function* runDeleteWatched() {
  yield all([getAction()]);
}
