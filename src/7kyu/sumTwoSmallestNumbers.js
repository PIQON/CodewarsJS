function sumTwoSmallestNumbers(numbers) {
  const twoMinimalsNumbers = numbers.sort((a, b) => (a -= b)).splice(0, 2);
  const sum = twoMinimalsNumbers.reduce((acc, next) => (acc += next), 0);
  return sum;
}
