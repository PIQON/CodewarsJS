function findMultiples(integer, limit) {
  const result = [];
  for (let i = 1; i <= limit / integer; i++) {
    result.push(integer * i);
  }
  return result;
}
