function getSum(a, b) {
  const [min, max] = [a, b].sort((a, b) => (a -= b));
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
