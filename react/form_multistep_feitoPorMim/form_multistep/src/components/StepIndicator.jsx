import React from "react";

import { Send, Star, UserRound } from "lucide-react";

import "./StepIndicator.css";

const StepIndicator = ({ stepNow }) => {
  const steps = [
    {
      icon: <UserRound size={24} />,
      label: "Identificação",
    },
    {
      icon: <Star size={24} />,
      label: "Avaliação",
    },
    {
      icon: <Send size={24} />,
      label: "Envio",
    },
  ];

  return (
    <div className="indicators">
      {/* <div className="indicator">
        <UserRound size={24} color="#333" />
        <span>Identificação</span>
      </div>
      <div className="separator"></div>
      <div className="indicator">
        <Star size={24} color="#333" />
        <span>Avaliação</span>
      </div>
      <div className="separator"></div>
      <div className="indicator">
        <Send size={24} color="#333" />
        <span>Envio</span>
      </div> */}
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className={index + 1 <= stepNow ? "indicator indicator-now" : "indicator"} >
          {step.icon}
          <span>{step.label}</span>
        </div>
          {index < steps.length - 1 && <div className="separator"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
