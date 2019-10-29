import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";

import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import createRootReducer from "./state/reducers";
import runAddWatched from "./sagas/addWatched";
import runAddUser from "./sagas/addUser";
import runLogin from "./sagas/login";
import runGetWatcheds from "./sagas/getWatcheds";
import runCheckToken from "./sagas/checkToken";

const history = createBrowserHistory();

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

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
