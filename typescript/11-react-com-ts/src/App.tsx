import "./App.css";

// 4 - importação de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

import { createContext } from "react";

// 6 - state
import State from "./components/State";
import Context from "./components/Context";

// 8 - type
type textOrNull = string | null

type fixed = "isso" | "ou" | "aquilo"

// 10 - context
interface IAppContext {
  language: string
  framework: string
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1 - variaveis
  const name: string = "Joelson";
  const age: number = 19;
  const isWorking: boolean = true;

  // 2 - funcoes
  const userGreeting = (name: string): string => {
    return `Ola ${name}`;
  };

  // 8 - type
  const myText: textOrNull = "alguma coisa"
  let myOtherText: textOrNull = null

  // myOtherText = "2"

  const myFixed: fixed = "ou"

  // 10 - context
  const contextValue: IAppContext = {
    language: "javascript",
    framework: "react",
    projects: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>Typescript com react</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Esta trabalhando!</p>}
      <h2>{userGreeting(name)}</h2>
      <FirstComponent />
      <SecondComponent name="Joelson" />
      <Destructuring title="post 1" content="lorem ipsum" commentsQTy={10} tags={["html", "css", "js"]} category={Category.CSS} />
      <Destructuring title="post 2" content="lorem ipsum" commentsQTy={10} tags={["html", "css", "js"]} category={Category.TS} />
      <Destructuring title="post 3" content="lorem ipsum" commentsQTy={10} tags={["html", "css", "js"]} category={Category.JS} />
      <State />
      {myText && <p>{myText}</p>}
      {myOtherText && <p>{myOtherText}</p>}
      <Context />
    </div>
    </AppContext.Provider>
  );
}

export default App;
