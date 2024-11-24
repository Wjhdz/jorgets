import React, { ReactNode, useMemo, useState } from "react";
import {
  Typography,
  Layout,
  Col,
  Row,
  Space,
  Divider,
  Avatar,
  Popover,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import MenuPrivate from "../../menu/private/MenuPrivate";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { getTokenUser } from "../../../utils/storage";
import ContentOptions from "../../card/ContentOptions";
import cliente from "../../../config/clientAxios";

interface props {
  children: ReactNode;
}

const { Footer, Content, Header } = Layout;
const { Title } = Typography;

const LayoutPrivate: React.FC<props> = ({ children }) => {
  const navigate: NavigateFunction = useNavigate();
  const [userNameUpperCase, setUserNameUpperCase] = useState<string>();
  const [userid] = useState<any>(getTokenUser());

  let user: any;

  useMemo(() => {
    const getUser = async () => {
      try {
        const user = await cliente.get(`${userid}`);
        const userName = user.data?.name;
        const upperCaseName =
          userName.charAt(0).toUpperCase() + userName.slice(1);
        console.log("mensaje desde useMemo");
        setUserNameUpperCase(upperCaseName);
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    };
    getUser();
  }, [userid]);

  return (
    <Layout>
      <Header style={{ position: "sticky", top: 0 }}>
        <Row>
          <Col span={20}>
            <MenuPrivate navigate={navigate} />
          </Col>
          <Col span={4}>
            <Row style={{ whiteSpaceCollapse: "collapse" }}>
              <Col style={{ color: "white" }}> {userNameUpperCase}</Col>
              <Divider type="vertical"></Divider>
              <Col>
                <Popover content={<ContentOptions />} trigger="click">
                  <Avatar
                    icon={
                      user?.data?.Avatar ? user?.data?.avatar : <UserOutlined />
                    }
                  />
                </Popover>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>

      <Divider />

      <Content style={{ minHeight: "60vh" }}>{children}</Content>

      <Divider />

      <Footer style={{ minHeight: "20vh" }}>
        <Space direction="vertical" align="center">
          <Row>
            <Title level={3}> Contacto</Title>
          </Row>

          <Row>
            <Col>Dirección: 123 Calle Principal, Ciudad, País </Col>
          </Row>

          <Row>
            <Col>Teléfono: +123456789</Col>
          </Row>

          <Row>
            <Col>Correo electrónico: info@example.com</Col>
          </Row>
        </Space>
      </Footer>
    </Layout>
  );
};

export default LayoutPrivate;
