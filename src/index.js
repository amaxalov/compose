const compose = function (...rest) {
  const func = rest;
  return function (...params) {
    const args = params;
    return params.map((i) =>
      func.reduce((accumulator, currentValue) => currentValue(accumulator), i)
    );
  };
};

export default compose;
