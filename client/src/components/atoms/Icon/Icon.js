import React from 'react';
import { string } from 'prop-types';

const Icon = ({ type, className, height, width, focusable, ...others }) => (
  <svg
    className={className}
    height={height}
    width={width}
    focusable={focusable}
    tabIndex={focusable === 'false' ? -1 : 0}
    aria-hidden={focusable === 'false'}
    aria-disabled={focusable === 'false'}
    data-locator={`${type}_icon`}
    {...others}
  >
    <use xlinkHref={`#${type}`} />
  </svg>
);

Icon.propTypes = {
  type: string.isRequired,
  className: string,
  height: string,
  width: string,
  focusable: string,
};

Icon.defaultProps = {
  focusable: 'false',
  className: '',
  height: '18px',
  width: '18px',
};

export default Icon;
