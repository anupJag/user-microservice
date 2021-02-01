import React from "react";
import { Route, Switch } from "react-router-dom";
import SnackbarProvider from "react-simple-snackbar";

import { APPLICATION_ROUTES } from "./routes";
import Header from "./components/organisms/Header";
import SideMenu from "./components/organisms/SideMenu";

import "./App.scss";

/**
 * @function App
 *
 * @summary Audit Tool Application
 *
 * @param {*} props
 *
 * @returns {JSX.Element}
 */
const App = (props) => {
  return (
    <SnackbarProvider>
      <section className="app-wrapper">
        <header className="app-wrapper-header">
          <Header />
        </header>
        <aside className="app-wrapper-aside black-background">
          <SideMenu />
        </aside>
        <main className="app-wrapper-main">
          <Switch>
            {APPLICATION_ROUTES.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </main>
      </section>
    </SnackbarProvider>
  );
};

export default App;
