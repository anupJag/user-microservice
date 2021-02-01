import React from "react";
import { withRouter } from "react-router-dom";
import MenuItem from "../../atoms/MenuItem";

import "./SideMenu.scss";

const SideMenu = (props) => {
  const { location } = props;

  return (
    <aside className="side-menu">
      <MenuItem divider={true} value="browse">
        Browse
      </MenuItem>

      <MenuItem
        active={location.pathname === "/dashboard"}
        value="dashboard"
        iconProps={{ type: "icon-home" }}
      >
        Dashboard
      </MenuItem>
      <MenuItem
        active={location.pathname === "/audit"}
        value="audit"
        iconProps={{ type: "icon-file-text2" }}
      >
        Audit
      </MenuItem>

      <MenuItem divider={true} value="more">
        More
      </MenuItem>
      <MenuItem
        active={location.pathname === "/sysadmin"}
        value="sysadmin"
        iconProps={{ type: "icon-file-text2" }}
      >
        Admin Control
      </MenuItem>
      <MenuItem
        active={location.pathname === "/about-us"}
        value="about-us"
        iconProps={{ type: "icon-pencil" }}
      >
        About Us
      </MenuItem>
      <MenuItem
        label=""
        active={location.pathname === "/help-center"}
        value="help-center"
        iconProps={{ type: "icon-home" }}
      >
        Help Center
      </MenuItem>
    </aside>
  );
};

export default withRouter(SideMenu);
