function findAverage(array) {
  if (array.length === 0) return 0;
  return array.reduce((acc, next) => (acc += next), 0) / array.length;
}
