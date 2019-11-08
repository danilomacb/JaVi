import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import createRootReducer from "./reducers/index";
import runAddWatched from "../sagas/watched/addWatched";
import runAddUser from "../sagas/user/addUser";
import runLogin from "../sagas/auth/login";
import runGetWatcheds from "../sagas/watched/getWatcheds";
import runCheckToken from "../sagas/auth/checkToken";
import runDeleteWatched from "../sagas/watched/deleteWatched";
import runGetWatched from "../sagas/watched/getWatched";
import runUpdateWatched from "../sagas/watched/updateWatched";
import runGetToWatchList from "../sagas/toWatch/getToWatchList";
import runAddToWatch from "../sagas/toWatch/addToWatch";
import runGetToWatch from "../sagas/toWatch/getToWatch";
import runUpdateToWatch from "../sagas/toWatch/updateToWatch";
import runDeleteToWatch from "../sagas/toWatch/deleteToWatch";

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
