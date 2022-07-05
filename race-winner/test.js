const raceWinner = require("./index");

test("Works if more than one contestant has a set time", () => {
  expect(
    raceWinner([
      { name: "Samuel", time: "05:42:14" },
      { name: "Fred", time: "05:12:53" },
      { name: "Cynthia", time: "dnf" },
    ])
  ).toBe("Fred won by 0 hours, 29 minutes, and 21 seconds");
});

test("Works if only 1 contestant has a time", () => {
  expect(
    raceWinner([
      { name: "Samuel", time: "dnf" },
      { name: "Fred", time: "05:12:53" },
      { name: "Cynthia", time: "dnf" },
    ])
  ).toBe("Fred won by no contest");
});

test("Works if nobody has a time", () => {
  expect(
    raceWinner([
      { name: "Samuel", time: "dnf" },
      { name: "Fred", time: "dnf" },
      { name: "Cynthia", time: "dnf" },
    ])
  ).toBe("There is no winner");
});
