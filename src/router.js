import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";

export const Router = () => (
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </HashRouter>
);
