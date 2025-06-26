const ConditionalRender = () => {
  const x = true;

  const name = "Joelson";

  return (
    <div>
      {/* 7 - render condicional */}
      <h3>isso sera exibido?</h3>
      {x && <p>Se x for true sim!</p>}
      {/* 8 - else */}
      {name === "Joelson" ? (
        <div>
          <p>Joelson</p>
        </div>
      ) : (
        <div>
          <p>Outro nome</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
