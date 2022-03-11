const realNumbersArray = [1, 2, 3, 4.5, -5, 56, 7.6, 6.6, -2];

const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num >= 0)
    .map((x) => x * x);
  return squaredIntegers;
};

/*A função recebe um array e olha se esse os números desse array são positvos e inteiros, 
através de uma função que filtra de número em numero, olhando se são inteiros e positivos, depois organiza com map em um vetor 
com os resultados */
const squaredIntegers = squareList(realNumbersArray);
console.log(squaredIntegers);
