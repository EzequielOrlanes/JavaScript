const arr1 = ["Jan", "Feb", "Mar", "Apr", "May"];

let arr2;
(function () {
  arr2 = arr1;
  arr1[0] = "Potato";
})();

console.log(arr2);

////--------->>>>>>>>>

const arr1 = ["Jan", "Feb", "Mar", "Apr", "May"];
let arr2;
(() => {
  arr2 = [...arr1]; // Aqui usamos propagamos exatamente o conteudo do array 1 para o array 2.
  arr1[0] = "Potato";
})();

console.log(arr2);

///Spread it's means "Propagação" in portuguese.
