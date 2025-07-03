import { useState } from "react";
import "./form.css";

const Form = ({ setIsSubmit, setImc }) => {
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidNumber(altura) && !isValidNumber(peso)) return;

    setImc(imc());
    setIsSubmit(1);
  };

  const handleReset = () => {
    setAltura("");
    setPeso("");
  };

  function imc() {
    return peso / (altura * altura);
  }

  function isValidNumber(value) {
    const numero = parseFloat(value.replace(",", ".")); // trata vírgula como ponto

    return (
      !isNaN(numero) &&
      isFinite(numero) &&
      numero >= 0 &&
      /^(?!0{2,})\d{1,3}([.,]\d{1,2})?$/.test(value)
    );
  }

  return (
    <form className="section-form section">
      <h1>Calculadora de IMC</h1>

      <div className="form-input">
        <label className="form-label">
          <span>Altura:</span>
          <input
            type="number"
            value={altura || ""}
            placeholder="Exemplo: 1,70"
            onChange={(e) => setAltura(e.target.value)}
          />
        </label>
        <label className="form-label">
          <span>Peso:</span>
          <input
            type="number"
            value={peso || ""}
            placeholder="Exemplo: 70,5"
            onChange={(e) => setPeso(e.target.value)}
          />
        </label>
      </div>
      <div className="form-button">
        <button type="submit" className="button-submit" onClick={handleSubmit}>
          Calcular
        </button>
        <button type="reset" className="button-reset" onClick={handleReset}>
          Limpar
        </button>
      </div>
    </form>
  );
};

export default Form;
