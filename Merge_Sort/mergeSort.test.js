import { mergeSort } from "./mergeSort.js";

describe("Merge sort", () => {
  test("Empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });
  test("Return single value", () => {
    expect(mergeSort([73])).toEqual([73]);
  });
  test("return already arranged values", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("return sorted val ", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });

  test("Big Numbers sorted ", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });
});
