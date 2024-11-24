// src/Components/Odontogram/Tooth.tsx
import React from "react";
import { Tooltip } from "antd";

interface ToothProps {
  number: number;
  status: string[];
}

const Tooth: React.FC<ToothProps> = ({ number, status }) => {
  const renderStatus = () => {
    return status.map((s, index) => (
      <div key={index} className={`status ${s}`}></div>
    ));
  };

  return (
    <Tooltip title={`Diente ${number}`}>
      <div className="tooth">
        <div className="tooth-number">{number}</div>
        <div className="tooth-status">{renderStatus()}</div>
      </div>
    </Tooltip>
  );
};

export default Tooth;
