const Events = () => {

  const handleClick = () => {
    console.log("testando um evento com função");
  }

  // 8 - funçaõ de renderização 

  const renderSomething = (x) => {
    if(x) {
      return <h1>Renderizando isso!</h1>
    } else {
      return <h1>Renderizando outra coisa </h1>
    }
  }

  return (
    <div>
      <div>
        <button
          onClick={() => {
            console.log("testando um evento");
          }}
        >
          Clique aqui
        </button>
      </div>
      {/* 7 - evento com função  */}
      <div>
        <button onClick={handleClick}>Clique aqui - com função</button>
      </div>
      {/* 8 - função com renderização  */}
      <div>
        {renderSomething(true)}
        {renderSomething(false)}
      </div>
    </div>
  );
};

export default Events;
