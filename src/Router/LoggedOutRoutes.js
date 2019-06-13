import React from 'react'
import {Route, Switch} from "react-router";
import {HOME, SIGNUP, LOGIN} from "../utils/constants.routes";
import Login from "../components/LoginManager/Login";
import Signup from "../components/LoginManager/Signup";

const LoggedOutRoutes = () => {
  return <Switch>
    <Route path={SIGNUP} component={Signup} />
    <Route path={LOGIN} component={Login} />
    <Route path={HOME} component={Login} />
    <Route component={NotFound}/>
  </Switch>
};

function NotFound() {
  return <h1>NOT FOUND</h1>
}

export default LoggedOutRoutes;
