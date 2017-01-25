import React from "react";
import {Router, Route, hashHistory} from "react-router";
import Home from "./components/home";
import Jobs from "./components/jobs"
import Scheduler from "./components/scheduler"

export const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <Route path="/scheduler" component={Scheduler}/>
      <Route path="/jobs" component={Jobs}/>
    </Route>
  </Router>
);
