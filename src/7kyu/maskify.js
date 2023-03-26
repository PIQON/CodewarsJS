// return masked string
export function maskify(cc) {
  const unMaskedPrivatedData = cc.slice(-4);
  const maskedLength = cc.length - unMaskedPrivatedData.length;

  return `${"#".repeat(maskedLength)}${unMaskedPrivatedData}`;
}
