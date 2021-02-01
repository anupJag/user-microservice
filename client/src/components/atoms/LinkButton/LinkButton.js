import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

const defaultProps = {};

const LinkButton = ({ className, children, href, ...otherProps }) => (
  <Link {...otherProps} className={className} to={href}>
    {children}
  </Link>
);

LinkButton.propTypes = propTypes;

LinkButton.defaultProps = defaultProps;

export default LinkButton;
