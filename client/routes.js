import React from "react";
import {Router, Route} from "react-router";

import Home from "./components/home";
import _Scheduler from "./containers/Scheduler";
import _Jobs from "./containers/Jobs";

export const routes = (
  <Route path="/" component={Home}>
    <Route path="/scheduler" component={_Scheduler}/>
    <Route path="/jobs" component={_Jobs}/>
  </Route>
);
