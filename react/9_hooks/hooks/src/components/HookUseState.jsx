import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "João";
  const [name, setName] = useState("Joelson");

  const changeName = () => {
    userName = "João da silva";

    setName("Joelson vicente");
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(age)
  }

  // 2 - useState e inputs
  const [age, setAge] = useState(19);

  return (
    <div>
      {/* 1 - useState  */}
      <h2>useState</h2>
      <p>useState: {name}</p>
      <p>variavel: {userName}</p>
      <button onClick={changeName}>Mudar nomes</button>
      {/* 2 - useState e inputs  */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos</p>
      <hr />
    </div>
  );
};

export default HookUseState;
