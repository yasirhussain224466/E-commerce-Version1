import React from "react";
import Home from "./Pages/Home";
import { Switch, Route } from "react-router-dom";

const RouteScreen = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
};

export default RouteScreen;
