import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import templateReducer from "./store/reducers/templates";
import filterReducer from "./store/reducers/filters";
import pagingReducer from "./store/reducers/paging";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  templates: templateReducer,
  filters: filterReducer,
  pagination: pagingReducer,
});

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById("root")
);
