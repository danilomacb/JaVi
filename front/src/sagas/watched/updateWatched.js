import { all, call, takeEvery, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import { UPDATE_WATCHED } from "../../state/actions/watched";
import { SET_MESSAGE } from "../../state/actions/message";

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
    yield put(push("/lista-de-assistidos"));
  }
}

function* getAction() {
  yield takeEvery(UPDATE_WATCHED, updateWatched);
}

export default function* runUpdateWatched() {
  yield all([getAction()]);
}
