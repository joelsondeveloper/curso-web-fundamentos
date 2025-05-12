document.body.classList.remove("no-js");
let imgAddClass = [...document.querySelectorAll("[data-addclass-on-scroll]")];

window.addEventListener("scroll", verificarScroll);

if (isGettingOut(imgAddClass[0])) {
  imgAddClass.forEach((img) => {
    img.classList.add(img.getAttribute("data-addclass-on-scroll"));
  });
}

function isGettingOut(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function verificarScroll() {
    if (imgAddClass.length == 0) {
    window.removeEventListener("scroll", verificarScroll);
    console.log("remove scroll");
    return;
  }

  imgAddClass.forEach((img) => {
    if (isGettingOut(img)) {
      setTimeout(() => {
        img.classList.add(img.getAttribute("data-addclass-on-scroll"));
        img.removeAttribute("data-addclass-on-scroll");
        img.removeAttribute("data-addclass-on-scroll-delay");
        imgAddClass = [...document.querySelectorAll("[data-addclass-on-scroll]")];
      }, img.getAttribute("data-addclass-on-scroll-delay") || 0);
    }
  });
}
