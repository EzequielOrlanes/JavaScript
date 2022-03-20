const half = (function () {
  return function half(stats) {
    return (stats.max + stats.min) / 2.0;
  };
})();