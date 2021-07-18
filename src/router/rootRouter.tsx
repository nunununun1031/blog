import React from "react";
import { Route, Switch } from "react-router";
import Browsing from "../components/pages/Browsing";
import Home from "../components/pages/Home";
import Page404 from "../components/pages/Page404";
import Writing from "../components/pages/Writing";
import Login from "../components/pages/Login";
import { Paths } from "./rootPaths";

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path={Paths.Home} >
          <Home />
        </Route>
        <Route path={Paths.Writing}>
          <Writing />
        </Route>
        <Route path={Paths.Login}>
          <Login />
        </Route>

        <Route 
        path={Paths.Browsing}
        render={({match: {url}}) => (
          <Switch>
            <Route path={`${url}/:id`}>
              <Browsing/>
            </Route>
            <Route path={`${url}/*`}>
              <Page404/>
            </Route>
          </Switch>
        )}
        >
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
