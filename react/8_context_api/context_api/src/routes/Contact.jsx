// 3 - alterando o valor de context 
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Contact = () => {

  const {counter} = useContext(CounterContext)

  return (
    <div>
      <h1>Pagina de contatos</h1>
      <p>valor do counter: {counter}</p>
    </div>
  )
}

export default Contact
