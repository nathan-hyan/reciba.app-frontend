import React from "react";
import PrivateRoute from "configs/PrivateRoute";
import { Switch, Route } from "react-router";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./constants";

export default function Routing() {
  return (
    <Switch>
      {PUBLIC_ROUTES.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          component={route.component}
          exact
        />
      ))}

      {PRIVATE_ROUTES.map((route) => (
        <PrivateRoute
          key={route.id}
          path={route.path}
          render={route.component}
        />
      ))}

      <Route render={() => <div>Not found</div>} />
    </Switch>
  );
}
