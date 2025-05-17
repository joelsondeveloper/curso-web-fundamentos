function Animal(tipo) {
  if (this instanceof Animal) {
    if (tipo) {
      this.tipo = tipo;
    }
  } else {
    throw new Error("Não é uma instância");
  }
}

function cachorro(nome) {
  this.nome = nome;
  Animal.call(this, "mamifero");
  // cachorro.constructor = cachorro
  this.comer = function () {
    console.log("comendo");
  };
}
cachorro.prototype = new Animal("mamifero");
cachorro.prototype.latir = function () {
  console.log("au au");
};
cachorro.prototype.constructor = cachorro;

let rex = new cachorro("Rex");
console.log(rex);

Animal.prototype.tipo = "desconhecido";

Animal.prototype.obterTipo = function () {
  return this.tipo;
};

// factories
const cachorroProto = {
  latir() {
          console.log(this.name + " fala: au au")
      },
      andar(distancia) {
          console.log(this.name + " anda " + distancia + " metros")
          this.posicao += distancia
      },
      comer() {
          console.log(this.name + " come")
      }
}

function criarCachorro(name) {
  let posicao = 0;


  const obj = {
    name,
    get posicao() {
      return posicao;
    },
    set posicao(novaPosicao) {
      console.log(`${name} andou ${novaPosicao - posicao} metros`)
      posicao = novaPosicao;
    }
  };

  Object.setPrototypeOf(obj, cachorroProto);

  return obj;
}
let dog1 = criarCachorro("dog1");
let dog2 = criarCachorro("dog2");

console.log(dog1);
console.log(dog2);

// ES6
class AnimalC {
  constructor(tipo) {
    if (tipo) {
      this.tipo = tipo;
    }
  }

  obterTipo() {
    return this.tipo;
  }
}

class GatoC extends AnimalC {
  constructor(nome) {
    super("mamifero");
    this.nome = nome;
    this.comer = function () {
      console.log(`${this.nome} está comendo`);
    };
  }
}

AnimalC.prototype.tipo = "desconhecido";

let animal = new AnimalC("anfibio");
let sapo = new AnimalC();

let mingal = new GatoC("Mingal");

// console.log(animal)
// console.log(cat)
// console.log(typeof animal)
// console.log(typeof cat)
// console.log(animal.obterTipo())
// console.log(cat.obterTipo())
// console.log(AnimalC.prototype);
// console.log(Animal.prototype);
// console.log(mingal);
// console.log(rex);
