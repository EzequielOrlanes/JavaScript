function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  Object.freeze(MATH_CONSTANTS);
  // O atributo freeze para esse objeto irá impedir que ele mude o seu valor em qualquer parte do código, mesmo que se tente fazer isso.

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }

  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);
