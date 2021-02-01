import React from "react";

/**
 * @function reactChildMap
 *
 * @summary
 * Create a mapped array of React children
 *
 * @param {Array<React.ReactChild>} children
 * @param {(any) => any} func
 *
 * @returns {Array<JSX.Element>}
 */
function reactChildMap(children, func) {
  let index = 0;

  return React.Children.map(children, (child) =>
    React.isValidElement(child) ? func(child, index++) : child
  );
}

export { reactChildMap };
