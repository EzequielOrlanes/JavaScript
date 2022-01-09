function externa(nome) {
  return function (idade) {
    return `Olá, meu nome é ${nome} e eu tenho ${idade} anos`;
  };
}

const Ezefun = externa("Ezequiel");
const Anafun = externa("Ana");

console.log(Ezefun(23));
console.log(Anafun(22));
