import React from "react";
import PropTypes from "prop-types";

import "./TableHead.scss";
import TableRow from "../TableRow";

/**
 * @typedef {Object} TableHeadProps
 *
 * @property {Array<string>} tableHeadData
 */

/**
 * @function TableHead
 *
 * @param {TableHeadProps} props
 *
 * @returns {JSX.Element}
 */
const TableHead = (props) => {
  const { tableHeadData } = props;

  if (!(tableHeadData && tableHeadData.length > 0)) return null;

  return (
    <thead className="TableHead-root">
      <TableRow>
        {tableHeadData.map((el) => (
          <th key={el} className="TableCell-root TableCell-head">
            {el}
          </th>
        ))}
      </TableRow>
    </thead>
  );
};

TableHead.propTypes = {
  /**
   * @type {Array<string>}
   */
  tableHeadData: PropTypes.arrayOf(PropTypes.string),
};

export default TableHead;
