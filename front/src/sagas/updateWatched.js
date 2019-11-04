import { all, call, takeEvery, put } from "redux-saga/effects";

import { UPDATE_WATCHED, SET_MESSAGE } from "../state/actions";
import { push } from "connected-react-router";

function* updateWatched(action) {
  const endpoint = "/watched/update/" + action.id;
  const response = yield call(fetch, endpoint, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(action.watched)
  });

  const responseMessage = yield response.json();
  yield put({ type: SET_MESSAGE, responseMessage });

  if (response.status === 200) {
    yield put(push("/assistidos"));
  }
}

function* getAction() {
  yield takeEvery(UPDATE_WATCHED, updateWatched);
}

export default function* runUpdateWatched() {
  yield all([getAction()]);
}
