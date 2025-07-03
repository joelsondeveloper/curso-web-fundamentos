import "./App.css";

// 2 - imagem em assets

import city from "./assets/city.jpg";

// 3 - useState
import Data from "./Data";

// 4 - renderização de listas
import ListRender from "./ListRender";

// 7 - render condicional
import ConditionalRender from "./ConditionalRender";

// 8 - props
import ShowUserName from "./ShowUserName";

// 9 - desestruturando props
import CarDetails from "./carDetails";

{
  /* 11 - renderização de listas com componentes  */
}
const cars = [
  { id: 1, brand: "Fiat", km: 0, color: "Branco" },
  { id: 2, brand: "Ford", km: 6250, color: "Vermelho" },
  { id: 3, brand: "VW", km: 10000, color: "Preto" },
];

// 12 - fragments 
import Fragments from "./Fragments";

// 13 - children prop 
import Container from "./Container";

// 14 - função em prop 
import ExecuteFunction from "./ExecuteFunction";

// 15 - state lift
import { useState } from "react";
import Message from "./Message";
import ChangeMessage from "./ChangeMessage";

function App() {

  // 14 - função em prop 
  const showMessage = () => console.log("cliquei");

  // 15 - state lift 
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => setMessage(msg);

  return (
    <div style={{ paddingBottom: "500px" }}>
      <h1>Avançando em react</h1>
      {/* 1 - imagem em public */}
      <img src="/img1.jpg" alt="Alguma imagem" />
      {/* 2 - imagem em assets */}
      <img src={city} alt="Cidade" />
      {/* 3 - useState  */}
      <Data />
      {/* 4 - renderização de listas */}
      <ListRender />
      {/* 7 - render condicional */}
      <ConditionalRender />
      {/* 8 - props */}
      <ShowUserName name="Joelson" />
      {/* 9 - desestruturando props */}
      <CarDetails brand="VW" km={10000} color="Preto" />
      {/* 10 - reaproveitamento de componentes  */}
      <CarDetails brand="Fiat" km={0} color="Branco" />
      <CarDetails brand="Ford" km={6250} color="Vermelho" />
      {/* 11 - renderização de listas com componentes  */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} />
      ))}
      {/* 12 - fragments */}
      <Fragments />
      {/* 13 - children prop */}
      <Container>
        <p>alguma coisa</p>
      </Container>
      {/* 14 - função em prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* 15 - state lift */}
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>

    </div>
  );
}

export default App;
