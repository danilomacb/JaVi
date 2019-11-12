import { all, call, takeEvery, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import { ADD_WATCHED } from "../../state/actions/watched";
import { SET_MESSAGE } from "../../state/actions/message";

function* addWatched(action) {
  const endpoint = "/watched/add";
  const response = yield call(fetch, endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(action.watched)
  });

  const responseMessage = yield response.json();
  yield put({ type: SET_MESSAGE, responseMessage });

  if (response.status === 200) {
    yield put(push("/lista-de-assistidos"));
  }
}

function* getAction() {
  yield takeEvery(ADD_WATCHED, addWatched);
}

export default function* runAddWatched() {
  yield all([getAction()]);
}
