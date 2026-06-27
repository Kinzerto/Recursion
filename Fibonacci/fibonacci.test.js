import { fibs, fibsRec } from "./fibonacci.js";

describe("fibonacci", () => {
  test("Regular function ", () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
  test.skip("Using a recursive function", () => {
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});
