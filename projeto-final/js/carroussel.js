class Carroussel {
  constructor(selector) {
    this.carroussel = document.querySelector(selector);
    this.wrapper = this.carroussel.querySelector("[data-carroussel-wrapper]");
    this.prev = this.carroussel.querySelector("[data-carroussel-prev]");
    this.next = this.carroussel.querySelector("[data-carroussel-next]");
    this.indicatorsContainer = document.getElementById(
      this.carroussel.getAttribute("data-carroussel-indicators")
    );
    this.items = this.wrapper.querySelectorAll("[data-carroussel-itens]");
    this.currentIndex = 0;
  }

  init() {
    console.log(this);
    this.createIndicators();
    this.addListeners();
    this.updateCarroussel();
  }

  createIndicators() {
    this.items.forEach((item, index) => {
      const indicator = document.createElement("div");
      // indicator.dataset.carrousselIndex = index;
      indicator.setAttribute("data-carroussel-index", index);
      indicator.classList.add("indicator");
      indicator.textContent = index;
      this.indicatorsContainer.appendChild(indicator);
    });
  }

  addListeners() {
    this.prev.addEventListener("click", () => {
      this.currentIndex =
        (this.currentIndex - 1 + this.items.length) % this.items.length;
      this.updateCarroussel();
    });
    this.next.addEventListener("click", () => {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.updateCarroussel();
    });
    this.indicatorsContainer.addEventListener("click", (e) => {
      if (!e.target.dataset.carrousselIndex) return;
      this.goToSlide(parseInt(e.target.getAttribute("data-carroussel-indicator")));
    });
  }

  updateCarroussel() {
    this.wrapper.style.setProperty("--currentIndex", this.currentIndex);


    // console.log(this.wrapper.querySelectorAll(`[data-carroussel-itens="${this.currentIndex}"]`));
    this.wrapper.querySelector(".active").classList.remove("active");
    this.wrapper.querySelector(`[data-carroussel-itens="${this.currentIndex}"]`).classList.add("active");
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarroussel();
  }
}
