import { useState } from "react";

import "./ImcCalc.css";

import Button from "./Button";

const ImcCalc = ({ calcImc }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  const handleValueChange = (e, setState) => {
    const upadetdValue = validDigits(e.target.value);
    setState(upadetdValue);
  };

  return (
    <div className="calc_container">
      <h2>Calculadora de IMC</h2>
      <form className="imc-form">
        <div className="form-inputs">
          <div className="form-controls">
            <label>
              <span>Altura:</span>
              <input
                type="text"
                id="height"
                placeholder="Exemplo: 1,75"
                onChange={(e) => handleValueChange(e, setHeight)}
                value={height}
              />
            </label>
          </div>
          <div className="form-controls">
            <label>
              <span>Peso:</span>
              <input
                type="text"
                id="weight"
                placeholder="Exemplo: 70,5"
                onChange={(e) => handleValueChange(e, setWeight)}
                value={weight}
              />
            </label>
          </div>
        </div>
        <div className="action-control">
          <Button id="calc-btn" text="Calcular" action={e => {
            calcImc(e, height, weight)
          }}/>
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
