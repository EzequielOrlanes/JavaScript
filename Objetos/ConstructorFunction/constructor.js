// let spaceShuttle = function (targetPlanet) {
//   this.targetPlanet = targetPlanet;
// };

///////////// São duas formas de fazer a mesma coisa que é criar um novo objeto//////
class spaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

let zeus = new spaceShuttle("Jupiter");
console.log(zeus.targetPlanet);

/////////////////////////////

function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }

  return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name);
