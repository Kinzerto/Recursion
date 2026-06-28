import { fibs, fibsRec } from "./fibonacci.js";

describe("fibonacci", () => {
  test("Regular function ", () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
  test("fibonacci of 15", () => {
    expect(fibs(15).at(-1)).toEqual(377);
  });

  test("Using a recursive function", () => {
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});
