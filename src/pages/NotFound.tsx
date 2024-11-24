import { Typography, Col, Result, Row } from "antd";
// import NotFoundImageV2 from "../Components/dataComponent/NotFoundLogoV2.svg";

const { Text, Title } = Typography;
const NotFound: React.FC = () => {
  return (
    <Row justify="center" align="middle">
      <Col
        xs={24}
        lg={12}
        style={{
          background: "white",
          height: "70%",
          display: "flex",
          margin: 0,
        }}
      >
        {" "}
        <Result
          subTitle={
            <Title level={3}>
              <Text italic>Ruta No Encontrada</Text>
            </Title>
          }
          title={
            <Title level={4}>
              <Text italic>404</Text>
            </Title>
          }
          // icon={<img src={NotFoundImageV2} alt="NotFound Logo"></img>}
        ></Result>
      </Col>
    </Row>
  );
};

export default NotFound;
