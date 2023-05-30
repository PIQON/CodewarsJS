var capitals = function (word) {
  const indexes = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90) {
      indexes.push(i);
    }
  }
  return indexes;
};
