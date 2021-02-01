import React from "react";
import PropTypes from "prop-types";

import "./PageLayout.scss";

/**
 * @typedef {Object} PageLayoutProps
 *
 * @property {string} headerName
 * @property {JSX.Element} children
 */

/**
 * @function PageLayout
 *
 * @summary
 * Template Wrapper for Creating a Main Page Layout
 *
 * @param {PageLayoutProps} props
 *
 * @returns {JSX.Element}
 */
const PageLayout = (props) => {
  const { headerName } = props;

  const children = props.children;

  return (
    <section className="pageLayout-wrapper">
      <section className="pageLayout-header">
        <h2 className="head p2">{headerName}</h2>
      </section>
      <section className="p2">{children}</section>
    </section>
  );
};

PageLayout.propTypes = {
  /**
   * @summary Adds a name to the header
   *
   * @type {string} header
   */
  headerName: PropTypes.string.isRequired,
};

export default PageLayout;
