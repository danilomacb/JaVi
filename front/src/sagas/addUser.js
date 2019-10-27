import { all, call, takeEvery, put } from "redux-saga/effects";
import { ADD_USER, SET_MESSAGE } from "../state/actions";

function* addUser(action) {
  const endpoint = "/user/add";
  const response = yield call(fetch, endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(action.user)
  });

  const responseMessage = yield response.json();
  yield put({ type: SET_MESSAGE, responseMessage });
}

function* getAction() {
  yield takeEvery(ADD_USER, addUser);
}

export default function* runAddUser() {
  yield all([getAction()]);
}
