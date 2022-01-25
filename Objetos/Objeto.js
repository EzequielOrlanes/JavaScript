var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.lados); //acessar uma propriedade
console.log(quadrado.area(5)); //acessar um metodo
console.log(quadrado.perimetro(5)); //acessar um metodo
