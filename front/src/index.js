import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reducers from "./state/reducers";
import runAddWatched from "./sagas/addWatched";
import runAddUser from "./sagas/addUser";
import runLogin from "./sagas/login";
import runGetWatcheds from "./sagas/getWatcheds";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(runAddWatched);
sagaMiddleware.run(runAddUser);
sagaMiddleware.run(runLogin);
sagaMiddleware.run(runGetWatcheds);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
