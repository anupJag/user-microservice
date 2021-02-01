import { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

import "./Portal.scss";

/**
 * @function Portal
 *
 * @param {{dimmer: boolean}} props
 *
 * @returns {React.ReactPortal}
 */
const Portal = (props) => {
  const { children, dimmer } = props;

  const mount = document.getElementById("portal-root");
  const element = document.createElement("div");

  useEffect(() => {
    mount.appendChild(element);
    handlePortalMount();
    return () => {
      mount.removeChild(element);
      handlePortalUnmount();
    };
  }, [element, mount]);

  const handlePortalMount = () => {
    document.body.classList.add("Portal-root");
    mount.classList.add("Portal-overlay");

    if (dimmer) {
      mount.classList.add("Portal-dimmer");
    }
  };

  const handlePortalUnmount = () => {
    document.body.classList.remove("Portal-root");
    mount.classList.remove("Portal-overlay");

    if (dimmer) {
      mount.classList.remove("Portal-dimmer");
    }
  };

  return createPortal(children, element);
};

Portal.propTypes = {
  /**
   * @type {boolean}
   */
  dimmer: PropTypes.bool,
};

Portal.defaultProps = {
  dimmer: true,
};

export default Portal;
