const { getLargerInt } = require("../fuctions.js");

describe("Functions Test", () => {
  test("getLargerInt returns larger integer", () => {
    expect(getLargerInt(2, 8)).toBe(8);
  });
});
