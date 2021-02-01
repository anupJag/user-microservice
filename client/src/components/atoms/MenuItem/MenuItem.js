import React from "react";
import LinkButton from "../LinkButton";
import Icon from "../../atoms/Icon";

import "./MenuItem.scss";

const MenuItem = ({ active, divider, children, value, iconProps }) => {
  if (divider) {
    return (
      <div key={value} className="divider mt3 mx3 mb2">
        {children}
      </div>
    );
  }
  const { type } = iconProps;
  return (
    <div key={value} className={`menu-item ${active ? "active" : ""}`}>
      <LinkButton href={value} className="flex-inline py2 pl5">
        <Icon
          className="text-center white-fill mr2"
          type={type}
          width="18px"
          height="18px"
        />
        <p>{children}</p>
      </LinkButton>
    </div>
  );
};

export default MenuItem;
