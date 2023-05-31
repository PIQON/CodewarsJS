export function digPow(n, p) {
  const numbersArray = n
    .toString()
    .split("")
    .map((num, id) => (+num) ** (p + id));

  console.log(numbersArray);

  const reducedSum = numbersArray.reduce((acc, next) => (acc += next), 0);

  const k = reducedSum / n;

  return Number.isInteger(k) ? k : -1;
}
