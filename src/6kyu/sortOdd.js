function sortArray(array) {
  const sortedOddsNumbers = array
    .filter((num) => num % 2 !== 0)
    .sort((a, b) => (a -= b));

  const result = array.map((num) => {
    if (num % 2 === 0) return num;
    return +sortedOddsNumbers.splice(0, 1);
  });

  return result;
}
