// Playing with array methods.

function digitize(n) {
  return n
    .toString()
    .split("")
    .map((el) => +el)
    .reverse();
}
