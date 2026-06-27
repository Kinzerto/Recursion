// Regular Function
const fibs = function (num) {
  let current = [0];
  for (let i = 0; i < num - 1; i++) {
    if (i === 0) {
      current.push(current[i] + 1);
    } else {
      current.push(current[i] + current[i - 1]);
    }
  }
  return current;
};

[0, 1, 1, 2, 3, 5, 8, 13];
console.log(fibs(8));
const fibsRec = function (num) {};

export { fibs, fibsRec };
