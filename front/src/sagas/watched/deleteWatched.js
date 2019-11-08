import { all, call, takeEvery, put } from "redux-saga/effects";

import { DELETE_WATCHED, GET_WATCHED_LIST } from "../../state/actions/watched";
import { SET_MESSAGE } from "../../state/actions/message";

function* deleteWatched(action) {
  const endpoint = "/watched/delete/" + action.id;
  const response = yield call(fetch, endpoint, { method: "DELETE" });

  const responseMessage = yield response.json();
  yield put({ type: SET_MESSAGE, responseMessage });

  if (response.status === 200) {
    yield put({ type: GET_WATCHED_LIST });
  }
}

function* getAction() {
  yield takeEvery(DELETE_WATCHED, deleteWatched);
}

export default function* runDeleteWatched() {
  yield all([getAction()]);
}
