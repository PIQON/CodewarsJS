String.prototype.toJadenCase = function () {
  const givenString = this;
  const splittedArrayByComa = givenString.split(" ");
  const jadenCaseString = splittedArrayByComa
    .map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join(" ");
  return jadenCaseString;
};
