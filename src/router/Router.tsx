import React from "react";
import { Route, Switch } from "react-router";
import Browsing from "../components/pages/Browsing";
import Home from "../components/pages/Home";
import Page404 from "../components/pages/Page404";
import Writing from "../components/pages/Writing";

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/writing">
          <Writing />
        </Route>
        <Route path="/browsing">
          <Browsing />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
};

export default Router;
