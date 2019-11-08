import { all, call, takeEvery, put } from "redux-saga/effects";

import { LOGIN, SET_TOKEN } from "../../state/actions/auth";
import { SET_MESSAGE } from "../../state/actions/message";

function* login(action) {
  const endpoint = "/auth/login";
  const response = yield call(fetch, endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(action.user)
  });

  const responseMessage = yield response.json();
  yield put({ type: SET_MESSAGE, responseMessage });

  if (response.status === 200) {
    yield put({ type: SET_TOKEN, token: document.cookie.replace("token=", "") });
  }
}

function* getAction() {
  yield takeEvery(LOGIN, login);
}

export default function* runLogin() {
  yield all([getAction()]);
}
