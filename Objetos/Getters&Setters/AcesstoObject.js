class Book {
  constructor(author) {
    this._author = author;
  }
  //getter
  get writer() {
    return this._author;
  }
  //setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }

    get temperature() {
      return this._temp;
    }

    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass(); //Criei um novo class termostato
const thermos = new Thermostat(76); //setei o termostato com 76 F
let temp = thermos.temperature; // atualizei a temperatura no termostato para 26 F
console.log(temp);

thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp);
