const {
  getLargerInt,
  isEvenOrOdd,
  calculateAverage
} = require("../fuctions.js");

describe("getLargerInt Test", () => {
  test("getLargerInt returns larger integer", () => {
    expect(getLargerInt(1, 2)).toBe(2);
  });

  test("getLargetInt returns udefined if no arguments provided", () => {
    expect(getLargerInt()).toBeUndefined();
  });
});

describe("isEvenOrOdd", () => {
  test("isEvenOrOdd returns Even for 8", () => {
    expect(isEvenOrOdd(10)).toBe("Even");
  });
  test("isEvenOrOdd return 'Odd' for 7", () => {
    expect(isEvenOrOdd(7)).toBe("Odd");
  });
});

describe("calculateAverage", () => {
  test("Calculate Avarage from sum of an Array", () => {
    expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3);
  });
});
