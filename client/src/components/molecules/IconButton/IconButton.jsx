import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./IconButton.scss";

import ButtonBase from "../../atoms/ButtonBase";
import Icon from "../../atoms/Icon";

/**
 * @typedef {Object} IconButtonProps
 *
 * @property {string} title
 * @property {(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void} onClick
 * @property {string} iconType
 */

/**
 * @function IconButton
 *
 * @summary Icon Button Factory Function
 *
 * @param {IconButtonProps} props
 *
 * @returns {JSX.Element}
 */
const IconButton = (props) => {
  const { title, onClick, iconType, disabled, className, ...restProps } = props;

  return (
    <ButtonBase
      title={title}
      type="button"
      onClick={onClick}
      className={classnames([
        "IconButton-root",
        disabled ? "IconButton-disable" : null,
        className,
      ])}
      disabled={disabled}
      {...restProps}
    >
      <Icon
        type={iconType}
        height="16"
        width="16"
        focusable="false"
        className="IconButton-icon"
      />
    </ButtonBase>
  );
};

IconButton.propTypes = {
  /**
   * @type {string}
   */
  title: PropTypes.string,

  /**
   * @type {(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void}
   */
  onClick: PropTypes.func,

  /**
   * @type {string}
   */
  iconType: PropTypes.string,
};

export default IconButton;
