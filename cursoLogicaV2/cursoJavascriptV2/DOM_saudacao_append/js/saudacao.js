(function () {
  const nameUser = null;

  if (nameUser) {
    const topBarElement = document.createElement("div");
    topBarElement.className = "top-bar";
    topBarElement.innerHTML = `<p>Olá, <b>${nameUser}</b>!</p>`;

    const elementoPai = document.querySelector(".hero");

    elementoPai.insertBefore(topBarElement, elementoPai.firstElementChild);
  }
})();
