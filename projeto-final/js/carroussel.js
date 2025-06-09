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
      // indicator.textContent = index;
      if (index === this.currentIndex) {
        indicator.classList.add("active");
      }
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
      this.goToSlide(parseInt(e.target.getAttribute("data-carroussel-index")));
    });
  }

  updateCarroussel() {
    this.wrapper.style.setProperty("--currentIndex", this.currentIndex);


   
    this.indicatorsContainer.querySelector(`.active`).classList.remove("active");
    this.indicatorsContainer.querySelector(`[data-carroussel-index="${this.currentIndex}"]`).classList.add("active");
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarroussel();
  }
}
