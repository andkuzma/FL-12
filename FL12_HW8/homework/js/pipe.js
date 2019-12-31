function addOne(a) {
  return a + 1;
}
function pipe(b, ...args) {
  for (let num of args) {
      b = num(b);
  }
  return b;
}
console.log(pipe(1, addOne));
