import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import StepIndicator from "./StepIndicator";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "./FormStep.css";

import { useState } from "react";

const FormStep = () => {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [satisfation, setSatisfation] = useState("");
  const [message, setMessage] = useState("");

  const goNext = (e) => {
    e.preventDefault();

    const form = document.querySelector("form");
    if (form.checkValidity()) {
      setStep(step + 1);
    } else {
      form.reportValidity();
    }
  };

  const goPrevious = (e) => {
    e.preventDefault();
    step != 1 && setStep(step - 1);
  };

  return (
    <form className="form">
      <StepIndicator stepNow={step} />
      {step === 1 && (
        <Step1
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
        />
      )}
      {step === 2 && (
        <Step2
          satisfation={satisfation}
          setSatisfation={setSatisfation}
          message={message}
          setMessage={setMessage}
        />
      )}
      {step === 3 && (
        <Step3
          name={name}
          satisfation={satisfation}
          message={message}
        />
      )}
      <div className="form-btn">
        <button onClick={(e) => goPrevious(e)}>
          <ChevronLeft size={18} />
          <span>Anterior</span>
        </button>
        {step === 3 ? (
          <button>Enviar</button>
        ) : (
          <button onClick={(e) => goNext(e)}>
            <span>Próximo</span>
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </form>
  );
};

export default FormStep;
