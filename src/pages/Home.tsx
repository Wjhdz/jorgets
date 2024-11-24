import { redirect } from "react-router-dom";
import LayoutPublic from "../Components/Layout/public/LayoutPublic";
import { Row, Col, Layout, Divider, Typography } from "antd";
import { getTokenUser } from "../utils/storage";

const Home: React.FC = () => {
  let user: any = getTokenUser();

  const { Content } = Layout;
  const { Paragraph, Text, Title } = Typography;

  if (user) redirect("/homelog");

  return (
    <>
      <LayoutPublic>
        <Layout>
          <Content style={{ padding: "0 " }}>
            <Row justify="space-around" align="middle">
              {" "}
              <Col span={18} offset={2}>
                <Title> Que es lorem ipsum¡?</Title>
                <Text>
                  {" "}
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor (N. del T. persona que se dedica a la imprenta)
                  desconocido usó una galería de textos y los mezcló de tal
                  manera que logró hacer un libro de textos especimen. No sólo
                  sobrevivió 500 años, sino que tambien ingresó como texto de
                  relleno en documentos electrónicos, quedando esencialmente
                  igual al original. Fue popularizado en los 60s con la creación
                  de las hojas "Letraset", las cuales contenian pasajes de Lorem
                  Ipsum, y más recientemente con software de autoedición, como
                  por ejemplo Aldus PageMaker, el cual incluye versiones de
                  Lorem Ipsum
                </Text>
                <Divider></Divider>
                <Paragraph>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor (N. del T. persona que se dedica a la imprenta)
                  desconocido usó una galería de textos y los mezcló de tal
                  manera que logró hacer un libro de textos especimen. No sólo
                  sobrevivió 500 años, sino que tambien ingresó como texto de
                  relleno en documentos electrónicos, quedando esencialmente
                  igual al original. Fue popularizado en los 60s con la creación
                  de las hojas "Letraset", las cuales contenian pasajes de Lorem
                  Ipsum, y más recientemente con software de autoedición, como
                  por ejemplo Aldus PageMaker, el cual incluye versiones de
                  Lorem Ipsum
                </Paragraph>
              </Col>
            </Row>
          </Content>
        </Layout>
      </LayoutPublic>{" "}
    </>
  );
};
export default Home;
