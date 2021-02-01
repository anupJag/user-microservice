import React from "react";
import PropTyes from "prop-types";

import "./TableBody.scss";

/**
 * @function TableBody
 *
 * @summary Provides a container for tbody
 * @param {{children: JSX.Element}} props
 *
 * @returns {JSX.Element}
 */
const TableBody = (props) => {
  const { children } = props;

  return <tbody className="TableBody-root">{children}</tbody>;
};

TableBody.propTypes = {
  /**
   * @type {Array<JSX.Element>}
   */
  children: PropTyes.any,
};

export default TableBody;
