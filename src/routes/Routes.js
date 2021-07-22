import Dashboard from "../pages/dashboard/Dashboard";
import SubmitThreat from "../pages/dashboard/SubmitThreat";
import UnVerifiedThreats from "../pages/dashboard/UnVerifiedThreats";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Threats from "../pages/Threats";

const Routes = [
  {
    path: "/",
    exact: true,
    auth: false,
    component: Home,
  },
  {
    path: "/threats",
    exact: true,
    auth: false,
    component: Threats,
  },
  {
    path: "/submit-threat",
    exact: true,
    auth: false,
    component: SubmitThreat,
  },
  {
    path: "/signin",
    exact: true,
    auth: false,
    component: Login,
  },
  {
    path: "/dashboard",
    exact: true,
    auth: false,
    component: Dashboard,
  },
  {
    path: "/unverified-threats",
    exact: true,
    auth: false,
    component: UnVerifiedThreats,
  },
  // {
  //   path: "/logout",
  //   exact: true,
  //   auth: false,
  //   component: Signout,
  // },
];

export default Routes;
