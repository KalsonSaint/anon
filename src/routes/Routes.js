import Dashboard from "../pages/dashboard/Dashboard";
import SubmitThreat from "../pages/dashboard/SubmitThreat";
import ThreatDetail from "../pages/dashboard/ThreatDetail";
import UnVerifiedThreats from "../pages/dashboard/UnVerifiedThreats";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import OneThreat from "../pages/OneThreat";
import Threats from "../pages/Threats";

const Routes = [
  {
    path: "/",
    exact: true,
    auth: false,
    component: Home,
  },
  {
    path: "/threat/:id",
    exact: true,
    auth: true,
    component: OneThreat,
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
    path: "/admin/threat/:id",
    exact: true,
    auth: true,
    component: ThreatDetail,
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
