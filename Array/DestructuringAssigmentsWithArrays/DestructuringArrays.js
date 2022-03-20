const [z, x] = [1, 2, 3, 4, 5, 6];

const [a, b, , c] = [1, 2, 3, 4, 5, 6]; //Eu consigo pular uma posição do array apenas deixando um espaço vazio no oobjeto
console.log(a, b, c);

let w = 8,
  k = 6;
(() => {
  [w, k] = [k, w];
})();

console.log(w);
console.log(k);
