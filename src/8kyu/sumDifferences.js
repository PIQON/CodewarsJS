function sumOfDifferences(arr) {
  const differences = [];
  const sortedDescending = arr.sort((a, b) => (b -= a));
  for (let i = 0; i < sortedDescending.length - 1; i++) {
    differences.push(sortedDescending[i] - sortedDescending[i + 1]);
  }

  return Math.abs(differences.reduce((acc, next) => (acc += next), 0));
}
