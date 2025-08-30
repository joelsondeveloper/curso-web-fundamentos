import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

import { useState } from "react";
import { userform } from "./hooks/useForm";

import "./App.css";

type formFields = {
  name: string;
  email: string;
  review: string;
  comment: string;
}

const formTemplate: formFields = {
  name: "",
  email: "",
  review: "",
  comment: "",
}

function App() {

  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => {
      return {
        ...prev,
        [key]: value
      }
    })
  }

  const formComponents = [<UserForm data={data} updateFieldHandler={updateFieldHandler} />, <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />, <Thanks data={data} />];

  const { currentStep, currentComponent, changeStep, isLastStep } =
    userform(formComponents);

  return (
    <div className="app">
      <header className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com sua compra, como você avalia o produto?</p>
      </header>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            {!isLastStep && (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            )}
            {isLastStep && (
              <button type="submit">
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
