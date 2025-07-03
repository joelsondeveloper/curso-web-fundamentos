import "./App.css";

import Form from "./components/form";
import Output from "./components/Output";

import { useState } from "react";

function App() {
  const [isSubmit, setIsSubmit] = useState(0);
  const [imc, setImc] = useState(0);

  return (
    <section className="container">
      {isSubmit ? (
        <Output setIsSubmit={setIsSubmit} imc={imc}/>
      ) : (
        <Form setIsSubmit={setIsSubmit} setImc={setImc} />
      )}
    </section>
  );
}

export default App;
