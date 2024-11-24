import React, { ReactNode } from "react";
import { Typography, Button, Col, Layout, Row, Space, Divider } from "antd";
import MenuPublic from "../../menu/public/MenuPublic";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface props {
  children: ReactNode;
}

const { Footer, Content, Header } = Layout;
const { Title } = Typography;

const LayoutPublic: React.FC<props> = ({ children }) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Layout>
      <Header style={{ top: 0 }}>
        <Row>
          <Col span={20}>
            <MenuPublic navigate={navigate} />
          </Col>
          <Col span={4}>
            <Button type="link" onClick={() => navigate("/login")}>
              Sing
            </Button>
          </Col>
        </Row>
      </Header>

      <br></br>
      <br></br>

      <Content style={{ minHeight: "60vh" }}>{children}</Content>

      <Divider />

      <Footer style={{ minHeight: "45vh", textAlign: "center" }}>
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
export default LayoutPublic;
