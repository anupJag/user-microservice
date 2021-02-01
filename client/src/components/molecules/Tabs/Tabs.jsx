import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import TabContainer from "../TabContainer";
import ButtonBase from "../../atoms/ButtonBase";
import { reactChildMap } from "../../../utils";

import "./Tabs.scss";

/**
 * @typedef {object} TabsProps
 *
 * @property {React.ReactChild} children
 * @property {(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: string|number) => void} onTabClick
 * @property {string|number} value
 */

/**
 *
 * @param {TabsProps} props
 */
const Tabs = (props) => {
  const { value: SelectedTab, onTabClick, children } = props;

  const tabClickEvent = (event) => {
    onTabClick(event, event.target.value);
  };

  /**
   * @function renderTabButtons
   *
   * @summary
   * Creates the button components for the Tabs
   *
   * @param {{title: string, value: string|number}} child
   */
  const renderTabButtons = (child) => {
    const { title, value } = child.props;

    if (!title) return null;

    return (
      <ButtonBase
        value={value}
        name={title}
        onClick={tabClickEvent}
        title={title}
        className={classnames([
          "TabsButton-root",
          SelectedTab === value ? "TabsButton-active" : null,
        ])}
      >
        {title}
      </ButtonBase>
    );
  };

  return (
    <TabContainer>{reactChildMap(children, renderTabButtons)}</TabContainer>
  );
};

Tabs.propTypes = {
  /**
   * @type {(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: string|number) => void}
   */
  onTabClick: PropTypes.func.isRequired,

  /**
   * @type {string|number}
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  /**
   * @type {React.ReactChild}
   */
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Tabs;
