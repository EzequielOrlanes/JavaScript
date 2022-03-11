const sum = (function () {
  return function sum(x, y, z) {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3));
///////////////////////////  1 and 2, are the same thing /////////////////////////

const sum = (() => {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3, 4, 5));

////////Rest it's means in portuguese "Descanso"/////////////////
/*Usando o Rest Operator (...args), agora além de simplificar o código nós não temos
mais a limitação do tamanho do vetor, agora nossa função aceitará quantos números você mandar*/
