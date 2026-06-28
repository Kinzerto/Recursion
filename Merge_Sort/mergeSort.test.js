import { mergeSort } from "./mergeSort.js";

describe("Merge sort", () => {
  test("Empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });
  test("Return single value", () => {
    expect(mergeSort([73])).toEqual([73]);
  });
});
