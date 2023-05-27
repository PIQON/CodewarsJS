export function integrate(coefficient, exponent) {
  const integrateExponent = exponent + 1;
  const integrateCoefficient = Math.trunc(coefficient / integrateExponent);
  return `${integrateCoefficient}x^${integrateExponent}`;
}
