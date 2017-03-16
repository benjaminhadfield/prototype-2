import React from "react";
import {Router, Route} from "react-router";

import Dashboard from "./components/dashboard";
import Home from "./containers/Home";
import Referrals from "./containers/Referrals";
import CasePreparation from "./containers/CasePreparation";
import Jobs from "./containers/Jobs";
import Scheduler from "./containers/Scheduler";
import LiveMdt from "./containers/LiveMdt";
import Confirmation from "./containers/Confirmation";

export const routes = (
  <Route path="/" component={Dashboard}>
    <Route path="/home" component={Home}/>
    <Route path="/referrals" component={Referrals}/>
    <Route path="/case-preparation" component={CasePreparation}/>
    <Route path="/triage" component={Scheduler}/>
    <Route path="/live-mdt" component={LiveMdt}/>
    <Route path="/confirmation" component={Confirmation}/>
    <Route path="/jobs" component={Jobs}/>
  </Route>
);
