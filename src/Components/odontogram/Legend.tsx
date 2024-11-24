// src/Components/Odontogram/Legend.tsx
import React from "react";

const Legend: React.FC = () => {
  return (
    <div className="legend">
      <div className="legend-item">
        <div className="status resin"></div> Resina
      </div>
      <div className="legend-item">
        <div className="status amalgama"></div> Amalgama
      </div>
      <div className="legend-item">
        <div className="status endodoncia"></div> Endodoncia
      </div>
      <div className="legend-item">
        <div className="status sellante"></div> Sellante
      </div>
      <div className="legend-item">
        <div className="status erosion"></div> Erosión
      </div>
      <div className="legend-item">
        <div className="status corona"></div> Corona
      </div>
    </div>
  );
};

export default Legend;
