var countBits = function (n) {
  const BITS_SYSTEM = 2;

  const translateToBits = n.toString(BITS_SYSTEM);
  const bitsAmount = translateToBits
    .split("")
    .filter((bit) => bit === "1").length;
  return bitsAmount;
};
