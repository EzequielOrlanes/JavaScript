//concat = in portuguese it's means Concatenar

let myConcat = function (arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2, 3], [4, 5, 6]));

/////////////////////////////////////////

let myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2, 3], [4, 5, 6]));

//Esses dois códigos são e fazem a mesma coisa, o segundo está apenas simplificado com um arrow function
