// src/Components/Odontogram/Odontogram.tsx
import React from "react";
import Tooth from "./Tooth";
import Legend from "./Legend";
import "./Odontogram.css";

const Odontogram: React.FC = () => {
  const teeth = [
    { number: 18, status: ["resin"] },
    { number: 17, status: ["amalgama"] },
    { number: 16, status: ["endodoncia"] },
    { number: 15, status: ["sellante"] },
    { number: 14, status: ["erosion"] },
    { number: 13, status: ["corona"] },
    // Agrega más dientes según sea necesario
  ];

  return (
    <div className="odontogram">
      <Legend />
      <div className="teeth-grid">
        {teeth.map((tooth) => (
          <Tooth
            key={tooth.number}
            number={tooth.number}
            status={tooth.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Odontogram;
