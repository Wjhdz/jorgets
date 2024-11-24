import React from "react";
import { Col, Row } from "antd";
import LoginForm from "../Components/form/LoginForm";
// import LoginLogo from "../Components/dataComponent/LoginLogo.svg";

const Login: React.FC = () => {
  return (
    <Row
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        display: "-ms-inline-flexbox",
        margin: 0,
      }}
    >
      <Col
        xs={24}
        lg={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <LoginForm />
      </Col>

      <Col
        xs={24}
        lg={12}
        style={{
          background: "white",
          height: "90%",
          display: "flex",
        }}
      >
        {/* <img src={LoginLogo} alt="Login"></img> */}
      </Col>
    </Row>
  );
};

export default Login;
