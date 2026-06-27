// Regular Function
const fibs = function (num) {
  let current = [0, 1];
  for (let i = 2; i < num; i++) {
    current.push(current[i - 2] + current[i - 1]);
  }
  return current;
};
console.log(fibs(8));
const fibsRec = function (num) {};

export { fibs, fibsRec };
