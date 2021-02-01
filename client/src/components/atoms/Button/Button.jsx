import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ButtonBase from "../ButtonBase";

import "./Button.scss";

/**
 * @typedef {Object} ButtonProps
 *
 * @property {('primary' | 'default')} color
 * @property {(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void} onClick
 * @property {string} className
 *
 */

/**
 * @function Button
 *
 * @summary Button Component
 *
 * @param {ButtonProps} props
 *
 * @returns {JSX.Element}
 */
const Button = (props) => {
  const { children, color, onClick, className, ...restProps } = props;

  return (
    <ButtonBase
      onClick={onClick}
      className={classNames([
        "Button-root",
        color === "primary" ? "Button-primary" : "Button-default",
        className,
      ])}
      {...restProps}
    >
      {children}
    </ButtonBase>
  );
};

Button.propTypes = {
  /**
   * @type {('primary' | 'default')}
   */
  color: PropTypes.oneOf(["primary", "default"]),

  /**
   * @type {string}
   */
  className: PropTypes.string,

  /**
   * @type {(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void}
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: "default",
};

export default Button;
