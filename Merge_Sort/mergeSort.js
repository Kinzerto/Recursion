const mergeSort = function (arr) {
  if (arr.length < 2) return arr;
  const result = [];

  //sliced the array
  const half = Math.ceil(arr.length / 2);
  const left = mergeSort(arr.slice(0, half));
  const right = mergeSort(arr.slice(half));

  let i = 0;
  let j = 0;

  // compare left and right and push the small value up to  large value
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  //return result and grab leftover value in either left or right
  return [...result, ...left.slice(i), ...right.slice(j)];
};
export { mergeSort };
