export function maxProduct(a) {
  let firstProduct = a[0];
  let secondProduct = 0;
  for (let i = 1; i < a.length; i++) {
    if (firstProduct < a[i]) {
      secondProduct = firstProduct;
      firstProduct = a[i];
    } else if (firstProduct > a[i] && secondProduct < a[i]) {
      secondProduct = a[i];
    }
  }
  return firstProduct * secondProduct;
}
