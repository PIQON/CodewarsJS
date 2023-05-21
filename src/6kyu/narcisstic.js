const changeStringToArrayNumber = (value) => {
  const numbersArray = value
    .toString()
    .split("")
    .map((num) => +num);
  return numbersArray;
};

function narcissistic(value) {
  // Get a array of single numbers.
  const numbersArray = changeStringToArrayNumber(value);

  const reducedSum = numbersArray.reduce(
    (acc, next) => (acc += next ** numbersArray.length),
    0
  );

  return reducedSum === value;
}
