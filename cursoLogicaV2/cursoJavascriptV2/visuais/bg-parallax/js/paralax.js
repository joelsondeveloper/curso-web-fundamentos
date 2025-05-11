(function () {
  window.addEventListener("scroll", positionImage);

  const dataParalax = [...document.querySelectorAll("[data-paralax]")];

  function isGettinOut(paralax) {
    return paralax.getBoundingClientRect().top <= 0
  }

  function getNewPosition(paralax) {
    const v = parseFloat(paralax.getAttribute("data-p-velocity")) || .5;

    return paralax.getBoundingClientRect().top * v * -1
  }

  function positionImage() {
    dataParalax.forEach((paralax) => {
      let originalPositionX = getComputedStyle(paralax).backgroundPositionX;
      let originalPositionY = getComputedStyle(paralax).backgroundPositionY;
      
      if (isGettinOut(paralax)){
        paralax.style.backgroundPosition = `${originalPositionX} ${getNewPosition(paralax)}px`
      } else {
        paralax.style.backgroundPosition = `${originalPositionX} ${0}`
      }
    });
  }
})();
