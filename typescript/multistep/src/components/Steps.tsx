import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

import "./Steps.css";

type stepsProps = {
  currentStep: number;
};

const Steps = ({ currentStep }: stepsProps) => {
  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser />
        <p>Identificação</p>
      </div>
      <div className={currentStep >= 1 ? "step active" : "step"}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>
      <div className={currentStep >= 2 ? "step active" : "step"}>
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  );
};

export default Steps;
