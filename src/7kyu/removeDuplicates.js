function solve(arr) {
  const nonDuplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.indexOf(arr[i + 1])) {
      continue;
    }
    if (!nonDuplicates.includes(arr[i])) {
      nonDuplicates.push(arr[i]);
    }
  }
  return nonDuplicates;
}
