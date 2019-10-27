import { all, call, takeEvery } from "redux-saga/effects";
import { ADD_USER } from "../state/actions";

function* addUser(action) {
  debugger;
  const endpoint = "/user/add";
  yield call(fetch, endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(action.user)
  });
}

function* getAction() {
  yield takeEvery(ADD_USER, addUser);
}

export default function* runAddUser() {
  yield all([getAction()]);
}
