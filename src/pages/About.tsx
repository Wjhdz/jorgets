import LayoutPublic from "../Components/Layout/public/LayoutPublic";
import { Layout } from "antd";

const About: React.FC = () => {
  const { Content } = Layout;

  return (
    <LayoutPublic>
      <Layout>
        <Content>
          <span> About</span>
        </Content>
      </Layout>
    </LayoutPublic>
  );
};
export default About;
