import Dashboard from "../pages/dashboard/Dashboard";
import SubmitThreat from "../pages/dashboard/SubmitThreat";
import UnVerifiedThreats from "../pages/dashboard/UnVerifiedThreats";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
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
    auth: true,
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
    auth: true,
    component: Dashboard,
  },
  {
    path: "/unverified-threats",
    exact: true,
    auth: true,
    component: UnVerifiedThreats,
  },
  {
    path: "/logout",
    exact: true,
    auth: false,
    component: Logout,
  },
];

export default Routes;
