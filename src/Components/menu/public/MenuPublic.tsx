import React from "react";

import type { NavigateFunction } from "react-router-dom";

import Routers from "../../../config/navigation/Routes";
import { Menu } from "antd";

interface props {
  navigate: NavigateFunction;
}

const MenuPublic: React.FC<props> = ({ navigate }) => {
  return (
    <>
      <Menu
        mode="horizontal"
        style={{
          position: "relative",
          zIndex: "2",
          backgroundColor: "#001529",
        }}
      >
        {Routers().map(
          (e) =>
            e.public && (
              <Menu.Item
                key={e.name}
                style={{ color: "#ffffff" }}
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
