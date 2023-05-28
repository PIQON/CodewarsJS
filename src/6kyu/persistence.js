export function persistence(num) {
  let persistenceCounter = 0;

  if (num < 10) return persistenceCounter;

  let multiplyNumberStr = num.toString();

  while (multiplyNumberStr.length > 1) {
    const multiplyNumbers = multiplyNumberStr.split("").map((num) => +num);
    const multiplyReduce = multiplyNumbers.reduce(
      (acc, next) => (acc *= next),
      1
    );
    multiplyNumberStr = multiplyReduce.toString();
    persistenceCounter++;
  }

  return persistenceCounter;

}
