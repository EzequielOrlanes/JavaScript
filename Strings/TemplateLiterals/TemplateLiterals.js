const person = {
  name: "Ezequiel",
  age: 23,
};

const greeting = `Hi, my name is ${person.name}!
I'm ${person.age} years old`;

console.log(greeting);

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"],
};

function makeList(arr) {
  const resulDisplayArray = [];

  for (let i = 0; i < arr.length; i++) {
    resulDisplayArray.push(`<li class="text-warning>${arr[i]} </li>`);
  }
  return resulDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);
