// components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";

// hooks
import { useForm } from "./hooks/useForm";
import { useState } from "react";

import "./App.css";
import Steps from "./components/Steps";

function App() {

  const formTemplate = {
    name: "",
    email: "",
    review: "",
    comment: "",
  }

  const [data,setData] = useState(formTemplate)

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [<UserForm data={data} updateFieldHandler={updateFieldHandler} />, <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />, <Thanks data={data} />];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          estamos felizes com a sua compra, utilize o formulariovabaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form
          onSubmit={(e) => {
            changeStep(currentStep + 1, e);
          }}
        >
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button
                type="button"
                onClick={() => {
                  changeStep(currentStep - 1);
                }}
              >
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
