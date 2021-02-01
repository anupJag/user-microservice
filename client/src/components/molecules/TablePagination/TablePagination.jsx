import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./TablePagination.scss";
import IconButton from "../IconButton";
import Button from "../../atoms/Button";

/**
 * @typedef {Object} TablePaginationProps
 *
 * @property {number} totalRecordCount
 * @property {number} currentPage
 * @property {number} pageSize
 * @property {(id: number) => any} onChange
 */

/**
 * @function TablePagination
 *
 * @param {TablePaginationProps} props
 *
 * @returns {JSX.Element}
 */
const TablePagination = (props) => {
  /**
   * @type {number}
   *
   * @summary Total number of page numbers to be shown for paginated buttons
   */
  const MAX_PAGES = 3;

  const [paginateArray, setPaginateArray] = useState([]);

  const { totalRecordCount, currentPage, pageSize, onChange } = props;

  useEffect(() => paginate(), [totalRecordCount, currentPage, pageSize]);

  const paginate = () => {
    /**
     * @type {Array<number>}
     */
    let paginationArray = [];

    let tempCurrentPage = currentPage,
      startPage,
      endPage;

    let totalPages = Math.ceil(totalRecordCount / pageSize);

    if (currentPage < 1) {
      tempCurrentPage = 1;
    } else if (currentPage > totalPages) {
      tempCurrentPage = totalRecordCount;
    }

    if (totalPages <= MAX_PAGES) {
      startPage = 1;
      endPage = totalPages;
    } else {
      let maxPagesBeforeCurrentPage = Math.floor(MAX_PAGES / 2);
      let maxPagesAfterCurrentPage = Math.ceil(MAX_PAGES / 2) - 1;

      if (tempCurrentPage <= maxPagesBeforeCurrentPage) {
        startPage = 1;
        endPage = MAX_PAGES;
      } else if (tempCurrentPage + maxPagesAfterCurrentPage >= totalPages) {
        startPage = totalPages - MAX_PAGES + 1;
        endPage = totalPages;
      } else {
        startPage = tempCurrentPage - maxPagesBeforeCurrentPage;
        endPage = tempCurrentPage + maxPagesAfterCurrentPage;
      }
    }

    paginationArray = Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i
    );

    setPaginateArray(paginationArray);
  };

  return (
    <div className="TablePagination-root">
      <div className="TablePagination-spacer"></div>
      <div className="TablePagination-toolbar">
        <IconButton
          title="first-page"
          iconType="icon-first-page"
          id="first-page"
          onClick={() => onChange(0)}
          disabled={currentPage === 0}
        />
        <IconButton
          title="previous-page"
          iconType="icon-previous"
          id="previous-page"
          onClick={() => onChange(currentPage - 1)}
          disabled={currentPage === 0}
        />
        {paginateArray.map((el) => (
          <Button
            key={el}
            color={el === currentPage + 1 ? "primary" : "default"}
            onClick={() => onChange(el - 1)}
            id={"page_${el}"}
            title={"page_${el}"}
            className={classnames([
              "TablePagination-NavButton-root",
              el !== currentPage + 1
                ? "TablePagination-NavButton-default"
                : null,
            ])}
          >
            {el}
          </Button>
        ))}
        <IconButton
          title="next-page"
          iconType="icon-next"
          id="next-page"
          onClick={() => onChange(currentPage + 1)}
          disabled={currentPage >= Math.ceil(totalRecordCount / pageSize) - 1}
        />
        <IconButton
          title="last-page"
          iconType="icon-last-page"
          id="last-page"
          onClick={() =>
            onChange(Math.max(0, Math.ceil(totalRecordCount / pageSize) - 1))
          }
          disabled={currentPage >= Math.ceil(totalRecordCount / pageSize) - 1}
        />
      </div>
    </div>
  );
};

TablePagination.propTypes = {
  /**
   * @type {number}
   */
  totalRecordCount: PropTypes.number,

  /**
   * @type {number}
   */
  currentPage: PropTypes.number,

  /**
   * @type {number}
   */
  pageSize: PropTypes.number,

  /**
   * @type {(id: number) => any}
   */
  onChange: PropTypes.func,
};

export default TablePagination;
