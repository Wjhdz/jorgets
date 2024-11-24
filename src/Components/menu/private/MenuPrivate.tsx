// import React from "react";

import type { NavigateFunction } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Routers from "../../../config/navigation/Routes";
import { Menu } from "antd";

interface props {
  navigate: NavigateFunction;
}

const MenuPrivate: React.FC<props> = () => {
  const navigate: NavigateFunction = useNavigate();
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
            e.private && (
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

export default MenuPrivate;
