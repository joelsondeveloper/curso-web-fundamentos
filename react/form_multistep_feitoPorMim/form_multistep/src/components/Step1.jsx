import React from "react";

const Step1 = ({ name, setName, email, setEmail }) => {
  return (
    <div className="form-inputs">
      <label>
        <span>Nome:</span>
        <input type="text" required placeholder="Digite o seu nome" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        <span>E-mail:</span>
        <input type="text" required placeholder="Digite o seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
    </div>
  );
};

export default Step1;
