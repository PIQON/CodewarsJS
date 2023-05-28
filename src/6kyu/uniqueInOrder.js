var uniqueInOrder = function (iterable) {
  const uniques = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      uniques.push(iterable[i]);
    }
  }
  return uniques;
};
