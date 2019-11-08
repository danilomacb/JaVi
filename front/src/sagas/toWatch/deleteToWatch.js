import { all, call, takeEvery, put } from "redux-saga/effects";

import { DELETE_TO_WATCH, GET_TO_WATCH_LIST } from "../../state/actions/toWatch";
import { SET_MESSAGE } from "../../state/actions/message";

function* deleteToWatch(action) {
  const endpoint = "/to-watch/delete/" + action.id;
  const response = yield call(fetch, endpoint, { method: "DELETE" });

  const responseMessage = yield response.json();
  yield put({ type: SET_MESSAGE, responseMessage });

  if (response.status === 200) {
    yield put({ type: GET_TO_WATCH_LIST });
  }
}

function* getAction() {
  yield takeEvery(DELETE_TO_WATCH, deleteToWatch);
}

export default function* runDeleteToWatch() {
  yield all([getAction()]);
}
