import { Col } from "antd";
import React from "react";
import LayoutOptions from "../../Components/Layout/public/LayoutOptions";
import LayoutPrivate from "../../Components/Layout/private/LayoutPrivate";

const HistoryData: React.FC = () => {
  return (
    <>
      <LayoutPrivate>
        <LayoutOptions>
          <Col>History users</Col>
        </LayoutOptions>
      </LayoutPrivate>
    </>
  );
};

export default HistoryData;
