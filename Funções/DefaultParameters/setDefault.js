const increment = (() => {
  return function increment(number, value = 1) {
    return number + value;
  };
})(); // essa função sem parametros que recebe o valor da sentença que acontece na primeira função.
console.log(increment(5, 2));
console.log(increment(5));

/*
Nesse código se o segundo argumento for passado para a função, 
então ela usa o argumento passado, caso contrario a função usa
 o valor passado para o value, ou seja 1.

*/
