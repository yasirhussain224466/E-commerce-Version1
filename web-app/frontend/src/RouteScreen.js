import React from "react";
import Home from "./Pages/Home";
import { Switch, Route } from "react-router-dom";
import Loader from "./Components/LoginSignUp";
import productDetail from "./Components/productDetail";

const RouteScreen = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/loginSignup" exact component={Loader} />
        <Route path="/productdetail/:id" component={productDetail} />
      </Switch>
    </>
  );
};

export default RouteScreen;
