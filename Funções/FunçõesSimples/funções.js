function AreaQuadrado(lado) {
  return lado * lado;
}
console.log(AreaQuadrado(10));

///////////////////////////////////////

function IMC(peso, altura) {
  return peso / altura ** 2;
}
console.log(IMC(60, 1.6));

/////////////////////////////

function corFavorita(cor) {
  if (cor == "preto") {
    return "eu gosto de rap";
  } else if (cor == "branco") {
    return "eu gosto do galo";
  }
}
console.log(corFavorita("preto"));

////////////////////////////
/*
addEventListener("click", function () {
  console.log("clicou");
}); /// só dá pra ver no browser
*/
///////////////////////////////

function terceiraIdade(idade) {
  if (typeof idade != "number") {
    return "Formato inválido, insira um número!!!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(80));
//////////////////////////////////////
