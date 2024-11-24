import { NavigateFunction, useNavigate } from "react-router-dom";
import { Row, Form, Input, Button, Card, Col } from "antd";
import alerts from "../message/alert";
import userprops from "../../Interface/userprops";
import { setTokenUser } from "../../utils/storage";
import cliente from "../../config/clientAxios";
import Title from "antd/es/typography/Title";

const LoginForm = () => {
  const navigate: NavigateFunction = useNavigate();

  const getUser = async (values: userprops) => {
    try {
      const Users = await cliente.get("");
      const user = Users.data.find(
        (item: any) =>
          item.email === values.email && item.password === values.password
      );

      if (user) {
        setTokenUser(user.id);
        alerts(1);
        navigate("/homelog");
      } else {
        alerts(2);
      }
    } catch {
      alerts(2);
    }
  };

  const onFinish = (values: any) => {
    getUser(values);
  };

  return (
    <Card bordered={true} style={{ textAlign: "center", width: 300 }}>
      <Row align="middle" justify="center" gutter={16}>
        <Col>
          <Title level={4}>Login</Title>
          <Form onFinish={onFinish}>
            <Form.Item
              name={"email"}
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Usuario es campo obligatorio!",
                },
              ]}
            >
              <Input placeholder="Correo"></Input>
            </Form.Item>
            <Form.Item
              name={"password"}
              rules={[
                {
                  required: true,
                  message: " ingresa la contraseña!",
                },
              ]}
            >
              <Input.Password placeholder="Contraseña" />
            </Form.Item>

            <Button htmlType="submit" type="primary" block>
              Login
            </Button>

            <Button block type="link" onClick={() => navigate("/register")}>
              Resgistrate !
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default LoginForm;
