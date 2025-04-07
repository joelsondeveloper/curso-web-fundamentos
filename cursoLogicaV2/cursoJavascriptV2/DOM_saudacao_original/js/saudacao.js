(function () {
  const nameUser = null;
  const saudacao = document.querySelector(".top-bar p");

  if (nameUser) {
    saudacao.innerHTML += `<b>${nameUser}</b>!`;
  } else {
    // saudacao.parentElement.style.display = "none";
    // saudacao.parentElement.remove();
    const saudacaoElement = saudacao.parentElement;
    saudacaoElement.parentElement.removeChild(saudacaoElement);
  }
})();