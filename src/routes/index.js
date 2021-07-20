import React from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import Routes from "./Routes";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { alertActions } from "../redux/actions/alertActions";
import { history } from "../util/history";
import { store } from "../store";
import { LastLocationProvider } from "react-router-last-location";

const AllRoutes = (props) => {
  history.listen(() => {
    store.dispatch(alertActions.clear());
  });

  return (
    <BrowserRouter>
      <LastLocationProvider>
        <Switch>
          {Routes.map((route, i) => {
            if (route.auth) {
              return <PrivateRoutes key={i} {...route} />;
            } else {
              return <PublicRoutes key={i} {...route} />;
            }
          })}
          <Redirect from="/" to="/signin" />
        </Switch>
      </LastLocationProvider>
    </BrowserRouter>
  );
};
export default AllRoutes;
