import Redirect from "../components/pages/Redirect";
import Dashboard from "../components/pages/Dashboard";
import UserManagement from "../components/pages/UserManagement";

/**
 * @typedef {Object} ApplicationRouteProps
 *
 * @property {string} path
 * @property {boolean} exact
 * @property {JSX.Element} component
 */

/**
 * @type {Array<ApplicationRouteProps>}
 */
const APPLICATION_ROUTES = [
  { path: "/", exact: true, component: Redirect },
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
  },
  {
    path: "/sysadmin",
    exact: true,
    component: UserManagement,
  },
];

export { APPLICATION_ROUTES };
