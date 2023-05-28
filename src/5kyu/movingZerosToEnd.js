function moveZeros(arr) {
  const zerosLength = arr.filter((el) => el === 0).length;
  const arrayWithoutZeros = arr.filter((el) => el !== 0);
  const result = [...arrayWithoutZeros, ...new Array(zerosLength).fill(0)];
  return result;
}
