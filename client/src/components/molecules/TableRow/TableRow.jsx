import React from "react";
import PropTypes from "prop-types";

import "./TableRow.scss";

/**
 *
 * @param {{children: React.ReactChildren}} props
 */
const TableRow = (props) => {
  const { children } = props;

  return <tr className="TableRow-root">{children}</tr>;
};

TableRow.propTypes = {
  /**
   * @type {Array<React.ReactChildren>}
   */
  children: PropTypes.arrayOf(PropTypes.element),
};

export default TableRow;
