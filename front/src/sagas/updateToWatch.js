import { all, call, takeEvery, put } from "redux-saga/effects";

import { UPDATE_TO_WATCH, SET_MESSAGE } from "../state/actions";
import { push } from "connected-react-router";

function* updateToWatch(action) {
  const endpoint = "/to-watch/update/" + action.id;
  const response = yield call(fetch, endpoint, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(action.toWatch)
  });

  const responseMessage = yield response.json();
  yield put({ type: SET_MESSAGE, responseMessage });

  if (response.status === 200) {
    yield put(push("/para-assistir"));
  }
}

function* getAction() {
  yield takeEvery(UPDATE_TO_WATCH, updateToWatch);
}

export default function* runUpdateToWatch() {
  yield all([getAction()]);
}
