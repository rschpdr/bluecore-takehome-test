const checkInventory = require("./index");

const I = {
  color: { blue: [123, 456, 789], red: [234, 567, 890] },
  size: { small: [123, 234], medium: [456, 789], large: [567, 890] },
};

test("Works correctly with compound filter", () => {
  const result = checkInventory(I, { color: "red ", size: "small " });

  console.log(result);

  expect(result).toEqual([234]);
});

test("Works correctly with simple filter", () => {
  expect(checkInventory(I, { color: "red " })).toEqual([234, 567, 890]);
});

test("Works correctly with invalid input", () => {
  expect(checkInventory(I, { color: "green" })).toEqual([]);
});
