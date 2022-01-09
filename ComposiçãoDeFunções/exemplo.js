const gritar = (s) => s.toUpperCase();
const enfatizar = (s) => `${s}!!!`;
const perguntar = (s) => `${s}???`;
const esticar = (s) =>
  s.split("").reduce((final, letra) => final + `${letra}${letra}${letra}`, "");
const quantidadeLetras = (s) => s.length;

const compor = (...funcoes) => {
  return function (texto) {
    let resultado = texto;
    for (let funcao of funcoes) {
      resultado = funcao(resultado);
    }
    return resultado;
  };
};

const exagerarMenos = compor(gritar, perguntar);
const exagerar = compor(gritar, enfatizar, perguntar, esticar);

const resultado1 = exagerarMenos("bom dia");
const resultado2 = exagerar("boa tarde");
const resultado3 = exagerar("boa noite");

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
