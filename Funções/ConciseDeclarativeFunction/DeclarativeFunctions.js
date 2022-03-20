// const bicicleta = {
//   rodas: 2,
//   setRodas: function (newRodas) {
//     this.rodas = newRodas;
//   },
// };

const bicicleta = {
  rodas: 2,
  setRodas(newRodas) {
    this.rodas = newRodas;
  },
};

bicicleta.setRodas(3);
console.log(bicicleta.rodas);
