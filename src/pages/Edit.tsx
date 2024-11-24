import { Col, Row } from "antd";
import EditForm from "../Components/form/EditForm";

const Edit: React.FC = () => {
  return (
    <Row>
      <Col xs={24} lg={12} style={{ margin: "120px", padding: "0 15px" }}>
        <EditForm />
      </Col>

      <Col xs={24} lg={12}></Col>
    </Row>
  );
};

export default Edit;
