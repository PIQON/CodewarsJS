function basicOp(operation, value1, value2) {
  let value = 0;
  switch (operation) {
    case "+":
      value = value1 + value2;
      break;
    case "-":
      value = value1 - value2;
      break;
    case "*":
      value = value1 * value2;
      break;
    case "/":
      value = value1 / value2;
      break;
  }
  return value;
  // Code
}
