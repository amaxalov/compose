const { compose } = require("./src/index");

const sqrt = (x) => Math.sqrt(x);

const toString = (x) => String(x);

test("2 function 1 argument", () => {
  expect(compose(sqrt, toString)(2)).toMatchObject(["1.4142135623730951"]);
});
