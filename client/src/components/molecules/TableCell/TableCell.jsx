import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./TableCell.scss";

/**
 * @function TableCell
 *
 * @summary Wrapper for tabledatacell td
 * @param {{children: React.ReactChildren}} props
 *
 * @returns {JSX.Element}
 */
const TableCell = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <td className={classnames(["TableCell-root", className])} {...restProps}>
      {children}
    </td>
  );
};

TableCell.propTypes = {
  /**
   * @type {any}
   */
  children: PropTypes.any,

  /**
   * @type {string}
   */
  className: PropTypes.string,
};

export default TableCell;
