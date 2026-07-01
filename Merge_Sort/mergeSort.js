const mergeSort = function (arr) {
  if (arr.length < 2) return arr;
  const result = [];

  const half = Math.ceil(arr.length / 2);
  const left = mergeSort(arr.slice(0, half));
  const right = mergeSort(arr.slice(half));

  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    console.log("ruuned");
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
};
export { mergeSort };
