import React from "react";
import Routers from "../../../config/navigation/Routes";
import type { NavigateFunction } from "react-router-dom";

import { Menu } from "antd";

interface props {
  navigate: NavigateFunction;
}

const MenuPublic: React.FC<props> = ({ navigate }) => {
  return (
    <>
      <Menu style={{ backgroundColor: "#F5F5F5" }}>
        {Routers().map(
          (e) =>
            (e.path == "/historydata" || e.path == "/newdata") && (
              <Menu.Item
                key={e.name}
                style={{ color: "black" }}
                onClick={() => navigate(e.path)}
              >
                {e.name}{" "}
              </Menu.Item>
            )
        )}
      </Menu>
    </>
  );
};

export default MenuPublic;
