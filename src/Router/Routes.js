import React from 'react'
import {Route, Switch} from "react-router";
import {ACCOUNT, EXERCISE, EXERCISES, HOME, LOGIN, ROUTINE, ROUTINES, SIGNUP} from "../utils/constants.routes";
import {ExcerciseComponent} from "../components/Excercise/excercise";
import {ExcerciseDashboardComponent} from "../components/Excercise";
import {DashboardComponent} from "../components/Dashboard";
import Login from "../components/LoginManager/Login";
import Signup from "../components/LoginManager/Signup";
import RoutineDashboardComponent from "../components/Routine";
import {RoutineComponent} from "../components/Routine/Routine";

const Routes = () => {
  return <Switch>
    <Route path={ROUTINE} component={RoutineComponent} />
    <Route path={ROUTINES} component={RoutineDashboardComponent} />
    <Route path={EXERCISE} component={ExcerciseComponent} />
    <Route path={EXERCISES} component={ExcerciseDashboardComponent}/>
    <Route path={ACCOUNT} component={ExcerciseDashboardComponent}/>
    <Route path={HOME} component={DashboardComponent} />
    <Route path={LOGIN} component={Login} />
    <Route path={SIGNUP} component={Signup} />
    <Route component={NotFound}/>
  </Switch>
};

function NotFound() {
  return <h1>NOT FOUND</h1>
}

export default Routes;
