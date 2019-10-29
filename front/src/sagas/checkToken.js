import { all, call, takeEvery, put } from "redux-saga/effects";
import { CHECK_TOKEN, SET_TOKEN } from "../state/actions";

function* checkToken() {
  const endpoint = "/user/checkToken";
  const response = yield call(fetch, endpoint);

  if (response.status === 200) {
    yield put({ type: SET_TOKEN, token: document.cookie.replace("token=", "") });
  } else {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  }
}

function* getAction() {
  yield takeEvery(CHECK_TOKEN, checkToken);
}

export default function* runCheckToken() {
  yield all([getAction()]);
}
