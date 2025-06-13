(function () {
  let classe = "";
  const classesPermitidas = ["mamifero", "ave", "reptil", "peixe"];

  const cachorro = {
    name: "rex",

    get classe() {
      return classe;
    },

    set classe(_classe) {
      if (classesPermitidas.includes(_classe)) {
        classe = _classe;
      }
    },
  };

  this.cachorro = cachorro;
})();

console.log(cachorro.classe);
cachorro.classe = "peixe";
console.log(cachorro.classe);

function criarAnimal(nome, classe) {
  let _classe = classe;
  const classesPermitidas = ["mamifero", "ave", "reptil", "peixe"];

  return {
    nome,

    get classe() {
      return _classe;
    },

    set classe(novaClasse) {
      if (classesPermitidas.includes(novaClasse)) {
        _classe = novaClasse;
      }
    },
  };
}

const tartaruga = criarAnimal("tartaruga", "reptil");

class Animal {
  #classe;

  constructor(nome, classe) {
    this._nome = nome;
    this.#classe = classe;
  }

  get classe() {
    return this.#classe;
  }

  set classe(novaClasse) {
    const classesPermitidas = ["mamifero", "ave", "reptil", "peixe"];
    if (classesPermitidas.includes(novaClasse)) {
      this._classe = novaClasse;
    }
  }
}

const baleia = new Animal("jubarte", "mamifero");
