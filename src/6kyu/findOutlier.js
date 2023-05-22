function findOutlier(integers) {
  const even = integers.filter((num) => num % 2 === 0);
  const odd = integers.filter((num) => num % 2 !== 0);
  return even.length > odd.length ? odd[0] : even[0];
}
