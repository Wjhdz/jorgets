import FormRegister from "../Components/form/RegisterForm";
import { Col, Row } from "antd";

const Register = () => {
  return (
    <Row
      style={{
        alignItems: "end",
        justifyContent: "center",
        height: "100vh",
        display: "-ms-inline-flexbox",
        background: "red",
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
          color: "red",
        }}
      >
        <FormRegister />
      </Col>

      <Col> hello</Col>
    </Row>
  );
};

export default Register;
