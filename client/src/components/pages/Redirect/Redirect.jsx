import React from "react";
import { Redirect } from "react-router-dom";

/**
 * @function RedirectComp
 *
 * @summary
 * Default page redirector
 *
 * @returns {JSX.Element}
 */
const RedirectComp = () => <Redirect to="/dashboard" />;

export default RedirectComp;
