const stats = {
  max: 56.54,
  median: 34.67,
  mode: 23.68,
  min: 22.02,
};

// const half = (function () {
//   return function half(stats) {
//     return (stats.max + stats.min) / 2.0;
//   };
// })();

const half = (function () {
  return function half({ max, min }) {
    /// Usando Destructuring
    return (max + min) / 2.0;
  };
})();

console.log(stats);
console.log(half(stats));
