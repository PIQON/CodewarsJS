function digitalRoot(n) {
  if (n < 10) return n;

  let numberToString = n.toString();

  while (numberToString.length > 1) {
    const mappedToNumberArray = numberToString
      .split("")
      .map((number) => Number(number));
    const reducedArray = mappedToNumberArray.reduce(
      (curr, next) => (curr += next),
      0
    );

    numberToString = String(reducedArray);
  }

  return Number(numberToString);
}
