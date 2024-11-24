import { Col } from "antd";
import LayoutPrivate from "../../Components/Layout/private/LayoutPrivate";
import LayoutOptions from "../../Components/Layout/public/LayoutOptions";

const NewData = () => {
  return (
    <>
      <LayoutPrivate>
        <LayoutOptions>
          <Col>new data</Col>
        </LayoutOptions>
      </LayoutPrivate>
    </>
  );
};
export default NewData;
