(function () {
  function calcularIMC(peso, altura, calllback) {
    if (peso <= 0 || altura <= 0) {
      throw new Error("Peso e altura devem ser maiores que zero.");
    }
    if (typeof peso !== "number" || typeof altura !== "number") {
      throw new Error("Peso e altura devem ser números.");
    }

    const imc = peso / (altura * altura);
    return typeof classificarIMC === "function" ? calllback(imc) : imc;
  }

  function classificarIMC(imc) {
    if (imc <= 16.9 && imc > 0) {
      return "Muito abaixo do peso";
    } else if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc < 24.9) {
      return "Peso normal";
    } else if (imc < 29.9) {
      return "Sobrepeso";
    } else if (imc < 34.9) {
      return "Obesidade Grau 1";
    } else if (imc < 39.9) {
      return "Obesidade Grau 2 (severa)";
    } else if (imc >= 40) {
      return "Obesidade Grau 3 (mórbida)";
    } else {
      return "Valor inválido";
    }
  }

  let imc = calcularIMC(65, 1.74, classificarIMC);
  console.log("IMC:", imc);
})();
