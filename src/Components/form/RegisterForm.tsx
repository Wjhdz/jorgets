import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Button, Card, Col, Form, Input, Row } from "antd";
import cliente from "../../config/clientAxios";

import { setTokenUser } from "../../utils/storage";
import Title from "antd/es/typography/Title";
import alerts from "../message/alert";
// import { setTokenUser } from "../../utils/storage";

const RegisterForm: React.FC = () => {
  const [form] = Form.useForm();
  const navigate: NavigateFunction = useNavigate();

  const onFinish = async (Values: any) => {
    let { name, userName, lastName, email, password, avatar = "" } = Values;
    const newUser = { email, password, name, userName, lastName, avatar };
    const res = await cliente.post("", newUser);
    res.data.id;
    if (res.status === 201) {
      setTokenUser(res.data);
      form.resetFields();
      alerts(3);
      navigate("/homelog");
    }
  };

  return (
    <Card bordered={true} style={{ justifySelf: "center", width: 450 }}>
      <Row align="middle" justify="center" gutter={16}>
        <Col>
          <Form onFinish={onFinish}>
            <Title level={4}>Register</Title>

            <Form.Item
              name="userName"
              rules={[
                {
                  required: true,
                  message: "Este campo es requerido",
                },
              ]}
            >
              <Input placeholder="userName" />
            </Form.Item>

            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Este campo es requerido",
                },
              ]}
            >
              <Input placeholder="Name" />
            </Form.Item>

            <Form.Item
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Este campo es requerido",
                },
              ]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Este campo es requerido",
                },
                { type: "email", message: "El email no es válido" },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Este campo es requerido",
                },
              ]}
            >
              <Input placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default RegisterForm;
