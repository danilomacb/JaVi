import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import createRootReducer from "./reducers/index";
import login from "../sagas/auth/login";
import checkToken from "../sagas/auth/checkToken";
import addUser from "../sagas/user/addUser";
import getWatched from "../sagas/watched/getWatched";
import getWatchedList from "../sagas/watched/getWatchedList";
import addWatched from "../sagas/watched/addWatched";
import deleteWatched from "../sagas/watched/deleteWatched";
import updateWatched from "../sagas/watched/updateWatched";
import getToWatch from "../sagas/toWatch/getToWatch";
import getToWatchList from "../sagas/toWatch/getToWatchList";
import addToWatch from "../sagas/toWatch/addToWatch";
import deleteToWatch from "../sagas/toWatch/deleteToWatch";
import updateToWatch from "../sagas/toWatch/updateToWatch";

export const history = createBrowserHistory();

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(history),
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  );

  sagaMiddleware.run(login);
  sagaMiddleware.run(checkToken);
  sagaMiddleware.run(addUser);
  sagaMiddleware.run(getWatched);
  sagaMiddleware.run(getWatchedList);
  sagaMiddleware.run(addWatched);
  sagaMiddleware.run(deleteWatched);
  sagaMiddleware.run(updateWatched);
  sagaMiddleware.run(getToWatch);
  sagaMiddleware.run(getToWatchList);
  sagaMiddleware.run(addToWatch);
  sagaMiddleware.run(deleteToWatch);
  sagaMiddleware.run(updateToWatch);

  return store;
}
