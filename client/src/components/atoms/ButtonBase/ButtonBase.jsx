import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./ButtonBase.scss";

/**
 * @typedef {Object} ButtonBaseProps
 *
 * @property {string} title
 * @property {(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void} onClick
 * @property {string} className
 * @property {('submit'|'button'|'reset')} type
 * @property {*} restProps
 */

/**
 * @function ButtonBase
 *
 * @param {ButtonBaseProps} props
 *
 * @returns {JSX.Element}
 */
const ButtonBase = (props) => {
  const { title, onClick, className, type, children, ...restProps } = props;

  return (
    <button
      onClick={onClick}
      className={classnames(["ButtonBase-root", className])}
      {...restProps}
      type={type}
      title={title}
    >
      {children}
    </button>
  );
};

ButtonBase.propTypes = {
  /**
   * @type {string}
   */
  title: PropTypes.string.isRequired,

  /**
   * @type {(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void}
   */
  onClick: PropTypes.func,

  /**
   * @type {('submit'|'button'|'reset')}
   */
  type: PropTypes.oneOf(["submit", "button", "reset"]),

  /**
   * @type {string}
   */
  className: PropTypes.string,
};

ButtonBase.defaultProps = {
  type: "button",
};

export default ButtonBase;
