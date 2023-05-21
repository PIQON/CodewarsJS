function highAndLow(numbers) {
  const numbersArray = numbers.split(" ").map((num) => +num);

  return `${Math.max(...numbersArray)} ${Math.min(...numbersArray)}`;
}
