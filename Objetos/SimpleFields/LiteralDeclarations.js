// const createPerson = (name, age, gender) => {
//   return {
//     name: name,
//     age: age,
//     gender: gender,
//   };
// };
///_>>>>>>>>>>>>>>>>

const createPerson = (name, age, gender) => ({ name, age, gender });

console.log(createPerson("Ezequiel", 23, "hetero top"));
