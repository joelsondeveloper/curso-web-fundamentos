// 3 - alterando o valor de context
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

// 5 - contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Contact = () => {
  const { counter } = useContext(CounterContext);

  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{color: color}}>Pagina de contatos</h1>
      <p>valor do counter: {counter}</p>
    </div>
  );
};

export default Contact;
