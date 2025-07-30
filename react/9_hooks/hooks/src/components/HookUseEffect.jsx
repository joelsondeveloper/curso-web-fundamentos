import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 - useEffect sem dependencias
  useEffect(() => {
    console.log("estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - array de dependecias vazio
  useEffect(() => {
    console.log("serei executado apenas uma vez");
  }, []);

  // 3 - array de deependencias com valores
  const [anotherNumber, setAnotherNumber] = useState(0);

  // useEffect(() => {
  //   if (anotherNumber > 0) {
  //     console.log("sou executado apenas quando muda o anotherNumberr");
  //   }
  // }, [anotherNumber]);

//   4 - cleanup do useEffect 
// useEffect(() => {
//     const timer = setTimeout(() => {
//         console.log("hello world")
//         setAnotherNumber(anotherNumber + 1)
//     }, 2000)
//     return () => clearTimeout(timer)
// }, [anotherNumber])

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar o another
      </button>
    </div>
  );
};

export default HookUseEffect;
