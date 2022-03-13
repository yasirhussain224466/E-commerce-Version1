import React from "react";
import Home from "./Pages/Home";
import { Switch, Route } from "react-router-dom";
import Loader from './Components/Signup'

const RouteScreen = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" exact component={Loader} />


      </Switch>
    </>
  );
};

export default RouteScreen;
