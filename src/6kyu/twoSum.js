function twoSum(numbers, target) {
  const results = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
      if (i === j) continue;
      if (numbers[i] + numbers[j] === target) {
        results.push(i, j);
      }
    }
  }
  return results.slice(0, 2);
}
