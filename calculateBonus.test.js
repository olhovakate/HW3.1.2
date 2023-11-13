const calculateBonus = require("./calculateBonus");

test("Test numbers", () => {
  expect(calculateBonus(10, 30)).toBe(40);
});

test("Test numbers less than 50", () => {
  expect(calculateBonus(19, 30)).toBe(49);
});

test("Test numbers if sum equal 50", () => {
  expect(calculateBonus(20, 30)).toBe(50);
});

test("Test borders numbers", () => {
  expect(calculateBonus(21, 30)).toBe(50);
});

test("Test numbers if sum more than 50", () => {
  expect(calculateBonus(20, 50)).toBe(50);
});
