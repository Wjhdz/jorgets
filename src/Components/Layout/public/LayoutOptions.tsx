import React, { ReactNode } from "react";
import MenuOptions from "../../menu/public/MenuOptions";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface props {
  children: ReactNode;
}

const LayoutOptions: React.FC<props> = ({ children }) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Layout
      style={{ opacity: 1, backgroundColor: "#F5F5F5", position: "sticky" }}
    >
      <Sider>
        <MenuOptions navigate={navigate}></MenuOptions>
      </Sider>
      <Content>{children}</Content>
    </Layout>
  );
};

export default LayoutOptions;
