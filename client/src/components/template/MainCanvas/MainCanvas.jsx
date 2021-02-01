import React from "react";
import PropTypes from "prop-types";

import "./MainCanvas.scss";

/**
 * Enums for CANVAS_TOP_COLOR
 * @readonly
 * @enum {string}
 */
const CANVAS_TOP_COLOR = {
  purple: "purple",
  deepPurple: "deepPurple",
  green: "green",
};

/**
 * @typedef {Object} MainCanvasProps
 *
 * @property {CANVAS_TOP_COLOR} topColor
 * @property {ReactChild} children
 */

/**
 * @function MainCanvas
 *
 * @summary
 * Provides the canvas area for funcationality
 *
 * @param {MainCanvasProps} props
 *
 * @returns {JSX.Element}
 */
const MainCanvas = (props) => {
  const { topColor, children } = props;

  return (
    <div
      className={`mainCanvas-wrapper mainCanvas-${CANVAS_TOP_COLOR[topColor]}`}
    >
      {children}
    </div>
  );
};

MainCanvas.propTypes = {
  /**
   * @type {string} topColor
   */
  topColor: PropTypes.oneOf(["purple", "darkPurple", "green"]),

  /**
   * @type {JSX.Element} children
   */
  children: PropTypes.arrayOf(PropTypes.element),
};

MainCanvas.defaultProps = {
  topColor: "purple",
};

export default MainCanvas;
