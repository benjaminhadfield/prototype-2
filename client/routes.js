import React from "react";
import {Router, Route, IndexRoute} from "react-router";

import {isLoggedIn, isAdminUserOrAbove} from './services/auth'
import Dashboard from "./components/dashboard";
import Home from "./containers/Home";
import Referrals from "./containers/Referrals";
import CasePreparation from "./containers/CasePreparation";
import Jobs from "./containers/Jobs";
import Scheduler from "./containers/Scheduler";
import LiveMdt from "./containers/LiveMdt";
import Confirmation from "./containers/Confirmation";
import Login from "./containers/Login";

const requireAuth = (nextState, replace) => {
    if (!isLoggedIn()) {
        replace('/login')
    } else {
        console.log('User logged in.');
    }
}

const requireAdmin = (nextState, replace) => {
  if (!isAdminUserOrAbove()) {
    replace('/login');
  } else {
    console.log('User is admin or above.');
  }
}

const requireAnnon = (nextState, replace) => {
  if (isLoggedIn()) {
    replace('/')
  }
}

export const routes = (
  <Route path="/" component={Dashboard}>
    <IndexRoute component={Home} onEnter={requireAuth}/>
    <Route path="/referrals" component={Referrals} onEnter={requireAuth}/>
    <Route path="/case-preparation" component={CasePreparation} onEnter={requireAuth}/>
    <Route path="/triage" component={Scheduler} onEnter={requireAuth}/>
    <Route path="/live-mdt" component={LiveMdt} onEnter={requireAuth}/>
    <Route path="/confirmation" component={Confirmation} onEnter={requireAdmin}/>
    <Route path="/jobs" component={Jobs} onEnter={requireAuth}/>
    <Route path="/login" component={Login} onEnter={requireAnnon}/>
  </Route>
);
