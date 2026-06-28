// Fibonacci Regular Function
const fibs = function (num) {
  let current = [0, 1];
  for (let i = 2; i < num; i++) {
    current.push(current[i - 2] + current[i - 1]);
  }
  return current;
};

//fibonacci Recursion
function fibsRec(n, result = [0, 1]) {
  if (n < 2) return [n];
  if (result.length >= n) return result;

  const next = result[result.length - 1] + result[result.length - 2];
  result.push(next);

  return fibsRec(n, result);
}
export { fibs, fibsRec };
