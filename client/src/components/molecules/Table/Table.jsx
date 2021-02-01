import React from "react";
import PropTypes from "prop-types";

import "./Table.scss";

/**
 * @function Table
 *
 * @param {{children: React.ReactChildren}} props
 *
 * @returns {JSX.Element}
 */
const Table = (props) => {
  const { children } = props;
  return <table className="Table-root">{children}</table>;
};

Table.propTypes = {
  /**
   * @type {React.ReactChildren}
   */
  children: PropTypes.any,
};

export default Table;
