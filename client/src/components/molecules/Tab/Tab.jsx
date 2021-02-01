import PropTypes from "prop-types";

/**
 * @typedef {Object} TabProps
 *
 * @property {string} title
 * @property {string|number} value
 */

/**
 *
 * @param {TabProps} props
 */
const Tab = (props) => {
  throw new Error(` Tabs are not supposed to be used as an independent object, they are supposed
    to be used inside Tabs component
  `);
};

Tab.propTypes = {
  /**
   * @type {string}
   */
  title: PropTypes.string.isRequired,

  /**
   * @type {string|number}
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Tab;
