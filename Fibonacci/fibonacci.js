// Fibonacci Regular Function
const fibs = function (num) {
  let current = [0, 1];
  for (let i = 2; i < num; i++) {
    current.push(current[i - 2] + current[i - 1]);
  }
  return current;
};

//fibonacci Recursion
const fibsRec = function (num) {
  if (num < 2) return num;

  return fibsRec(num - 2) + fibsRec(num - 1);
};

console.log(fibsRec(8));
export { fibs, fibsRec };
