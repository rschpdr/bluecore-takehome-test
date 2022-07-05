const medianSort = require("./index");

const I = {
  color: { blue: [123, 456, 789], red: [234, 567, 890] },
  size: { small: [123, 234], medium: [456, 789], large: [567, 890] },
};

test("Case 1", () => {
  expect(medianSort([3, [-2, 4, 9]])).toEqual([3, [-2, 4, 9]]);
});

test("Case 2", () => {
  expect(medianSort([[12, 9, 1, 25], 4])).toEqual([4, [12, 9, 1, 25]]);
});

test("Case 3", () => {
  expect(medianSort([[2.4, 0.2, 9.8], 0, [-1], [-9, -4]])).toEqual([
    [-9, -4],
    [-1],
    0,
    [2.4, 0.2, 9.8],
  ]);
});
