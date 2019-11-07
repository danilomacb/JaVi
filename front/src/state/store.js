import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import createRootReducer from "./reducers/index";
import runAddWatched from "../sagas/addWatched";
import runAddUser from "../sagas/addUser";
import runLogin from "../sagas/login";
import runGetWatcheds from "../sagas/getWatcheds";
import runCheckToken from "../sagas/checkToken";
import runDeleteWatched from "../sagas/deleteWatched";
import runGetWatched from "../sagas/getWatched";
import runUpdateWatched from "../sagas/updateWatched";
import runGetToWatchList from "../sagas/getToWatchList";
import runAddToWatch from "../sagas/addToWatch";
import runGetToWatch from "../sagas/getToWatch";
import runUpdateToWatch from "../sagas/updateToWatch";
import runDeleteToWatch from "../sagas/deleteToWatch";

export const history = createBrowserHistory();

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(history),
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  );

  sagaMiddleware.run(runAddWatched);
  sagaMiddleware.run(runAddUser);
  sagaMiddleware.run(runLogin);
  sagaMiddleware.run(runGetWatcheds);
  sagaMiddleware.run(runCheckToken);
  sagaMiddleware.run(runDeleteWatched);
  sagaMiddleware.run(runGetWatched);
  sagaMiddleware.run(runUpdateWatched);
  sagaMiddleware.run(runGetToWatchList);
  sagaMiddleware.run(runAddToWatch);
  sagaMiddleware.run(runGetToWatch);
  sagaMiddleware.run(runUpdateToWatch);
  sagaMiddleware.run(runDeleteToWatch);

  return store;
}
