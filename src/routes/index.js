import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Games from "../views/games";
import Ranks from "../views/ranks";
import Developer from "../views/developer";

const routes = [
  {
    path: "/home/games",
    component: Games
  },
  {
    path: "/home/ranks",
    component: Ranks
  },
  {
    path: "/home/developer",
    component: Developer
  }
];

const Routes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const HomeRoutes = routes.map((route, i) => <Routes key={i} {...route} />);

export {
  routes,
  Routes,
  HomeRoutes
}

export default Routes;