//
// This is the client side entry point for the React app.
//

import React from "react";
import {render} from "react-dom";
import {routes} from "./routes";
import {notify} from 'react-notify-toast';
import {Router, browserHistory} from "react-router";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {store} from './store';

import "./styles/base.css";


// Add the client app start up code to a function as window.webappStart.
// The webapp's full HTML will check and call it once the js-content
// DOM is created.

require.ensure(["./sw-registration"], (require) => {
  require("./sw-registration")(notify);
}, "sw-registration");

window.webappStart = () => {
  // const initialState = window.__PRELOADED_STATE__;

  render(
    <Provider store={store}>
      <Router history={browserHistory} children={routes}/>
    </Provider>,
    document.querySelector(".js-content")
  );
};
