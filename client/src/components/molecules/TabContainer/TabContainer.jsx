import React from "react";
import PropTypes from "prop-types";

import "./TabContainer.scss";

/**
 * @function TabContainer
 *
 * @summary
 * Container for all Tabs
 *
 * @param {{children: React.ReactChild}} param
 *
 * @returns {JSX.Element}
 */
const TabContainer = (props) => {
  const { children } = props;

  if (!children) {
    console.error("Tabs are not defined");
  }

  return <div className="TabContainer-root">{children}</div>;
};

TabContainer.propTypes = {
  /**
   * @type {React.ReactChild}
   */
  children: PropTypes.arrayOf(PropTypes.element),
};

export default TabContainer;
