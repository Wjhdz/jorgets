import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Typography,
} from "antd";
import cliente from "../../config/clientAxios";
import alerts from "../message/alert";
import Title from "antd/es/typography/Title";
import { getTokenUser } from "../../utils/storage";
import { NavigateFunction, useNavigate } from "react-router-dom";

const EditForm: React.FC = () => {
  const { Text } = Typography;
  const navigate: NavigateFunction = useNavigate();
  const [form] = Form.useForm();
  const [userData, setUserData] = useState<any>(null);
  const [fieldsChecked, setFieldsChecked] = useState<string[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  let userid = getTokenUser();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await cliente.get(`/${userid}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const onFinish = async (values: any) => {
    const updatedUserData: any = { ...userData }; // Copia del objeto userData

    fieldsChecked.forEach((field) => {
      updatedUserData[field] = values[field]; // Edita solo los campos seleccionados
    });

    try {
      await cliente.put(`/${userid}`, updatedUserData);
      alerts(4);
      navigate("/homelog");
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleCheckboxChange = (checkedValues: string[]) => {
    setFieldsChecked(checkedValues);
  };

  const handleModalOk = () => {
    setShowForm(true);
    setModalVisible(false);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  return (
    <Card>
      <Row justify={"center"}>
        <Col>
          <Title italic level={5}>
            {userData?.name}'s Profile
          </Title>
        </Col>

        <Divider type="vertical"></Divider>

        <Col>
          <Text italic> Select fields to edit </Text>
        </Col>
      </Row>

      <Row justify={"center"} style={{ marginBottom: "20px" }}>
        <Col>
          <Button onClick={() => setModalVisible(true)}>Edit Fields</Button>
        </Col>
      </Row>

      <Modal
        title="Select Fields to Edit"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Checkbox.Group
          options={[
            { label: "Name", value: "name" },
            { label: "Last Name", value: "lastName" },
            { label: "Email", value: "email" },
            { label: "Password", value: "password" },
          ]}
          onChange={handleCheckboxChange}
        />
      </Modal>

      {showForm && (
        <Form form={form} onFinish={onFinish}>
          {fieldsChecked.includes("name") && (
            <Form.Item name="name">
              <Input placeholder="Name" defaultValue={userData?.name} />
            </Form.Item>
          )}

          {fieldsChecked.includes("lastName") && (
            <Form.Item name="lastName">
              <Input
                placeholder="Last Name"
                defaultValue={userData?.lastName}
              />
            </Form.Item>
          )}

          {fieldsChecked.includes("email") && (
            <Form.Item name="email">
              <Input placeholder="Email" defaultValue={userData?.email} />
            </Form.Item>
          )}

          {fieldsChecked.includes("password") && (
            <>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
              <Form.Item
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>
            </>
          )}

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      )}
    </Card>
  );
};

export default EditForm;
