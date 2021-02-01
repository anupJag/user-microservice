import React from "react";
import PropTypes from "prop-types";
import Portal from "../../atoms/Portal";

import "./Dialog.scss";
import IconButton from "../IconButton";

/**
 * @typedef {Object} DialogProps
 *
 * @property {boolean} open
 * @property {string} Title
 * @property {() => any} onClose
 */

/**
 * @function Dialog
 *
 * @summary
 * Dialog
 *
 * @param {DialogProps} props
 *
 * @returns {JSX.Element}
 */
const Dialog = (props) => {
  const { children, open, title, onClose } = props;

  if (!open) return null;

  return (
    <Portal>
      <div className="Dialog-root" role="dialog">
        <div className="Dialog-Header" role="dialog-title">
          <h2 className="Dialog-Header-Title">{title}</h2>
          <IconButton
            iconType="icon-close"
            title="close"
            onClick={onClose}
            className="Dialog-Header-Close"
          />
        </div>
        <div className="Dialog-Content" role="dialog-content">
          {children}
        </div>
      </div>
    </Portal>
  );
};

Dialog.propTypes = {
  /**
   * @type {boolean}
   */
  open: PropTypes.bool.isRequired,

  /**
   * @type {string}
   */
  title: PropTypes.string.isRequired,

  /**
   * @type {() => any}
   */
  onClose: PropTypes.func.isRequired,
};

export default Dialog;
