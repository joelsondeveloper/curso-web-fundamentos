import "./App.css";

// 2 - css de componente
import MyComponents from "./components/MyComponents";

// 6 - css modules
import Title from "./components/Title";

function App() {
  // 4 - inline style dinamic
  const n = 15;

  // 5 - classes dinamicas
  const redTitle = true;

  return (
    <>
      {/* 1 - css global */}
      <h1>CSS no react</h1>
      {/* 2 - css de componente */}
      <MyComponents />
      <p>pegou o css do componente</p>
      {/* 3 - inline style  */}
      <p
        style={{ color: "blue", padding: "10px", borderTop: "1px dotted #000" }}
      >
        este elemento vai ter um estilo inline
      </p>
      {/* 4 - inline style dinamic */}
      <h2 style={n > 10 ? { color: "green" } : { color: "red" }}>
        Css dinamico
      </h2>
      {/* 5 - classes dinamicas  */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo vai ter uma classe dinamica
      </h2>
      {/* 6 - css modules */}
      <Title />
    </>
  );
}

export default App;
