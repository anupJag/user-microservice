import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef {Object} TabPanelProps
 *
 * @property {string|number} tabValue
 * @property {string|value} panelValue
 *
 */

/**
 * @function TabPanel
 *
 * @summary
 * Provides Selected Tab Panel area for view data
 *
 * @param {TabPanelProps} props
 *
 * @returns {JSX.Element}
 */
const TabPanel = (props) => {
  const { tabValue, panelValue, children } = props;

  /**
   * Check to determine component mount
   */
  if (tabValue !== panelValue) return null;

  return <section className="p2">{children}</section>;
};

TabPanel.propTypes = {
  /**
   * @type {string|number}
   */
  tabValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,

  /**
   * @type {string|number}
   */
  panelValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default TabPanel;
