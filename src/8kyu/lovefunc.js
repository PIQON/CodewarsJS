function lovefunc(flower1, flower2) {
  const odd = [flower1, flower2].filter((flower) => flower % 2 !== 0);
  const even = [flower1, flower2].filter((flower) => flower % 2 === 0);
  return odd.length === even.length;
}
