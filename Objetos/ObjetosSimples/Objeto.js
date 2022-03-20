var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado; //this aponta pro objeto
  },
  cinco() {
    return 5;
  },
};
/*
console.log(quadrado.lados); //acessar uma propriedade
console.log(quadrado.area(5)); //acessar um metodo
console.log(quadrado.perimetro(5)); //acessar um metodo
console.log(quadrado.cinco());

console.log(Math.random()); //número aleátorio

console.table(quadrado); //console é um objeto também dentro do javascript
*/
////////////// Exercício//////////

var cadastro = {
  nome: "Ezequiel",
  sobrenome: "Orlanes",
  carro: "Punto",
  preço: 32000,
  profissão: "Engenheiro de Sofware",
  idade: 23,
};

cadastro.NomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
console.log(cadastro.NomeCompleto());

/////////////////////////////////////////////

var cachorro = {
  raça: "viraLata",
  cor: "caramelo",
  idade: 3,

  latir(pessoa) {
    if (pessoa === "Dono") {
      return "Au au au au au au au au ";
    } else {
      return "Ohs ohs ohs oooorrrrrr ";
    }
  },
};

console.log(cachorro.latir("Dono"));

///////////////////////////////////////
var Nome = "Ezequiel";

console.log(Nome.length);

console.log(Nome.split);
