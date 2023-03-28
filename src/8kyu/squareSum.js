function squareSum(numbers) {
  const squaredNumbers = numbers.map((number) => number ** 2);
  const reducedNumbers = squaredNumbers.reduce((acc, next) => (acc += next), 0);
  return reducedNumbers;
}
