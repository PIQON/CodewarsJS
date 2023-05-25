function solution(str) {
  const reparedInput = str.length % 2 === 0 ? str : `${str}_`;
  const result = [];

  for (let i = 0; i < reparedInput.length; i++) {
    if (i % 2 === 0) {
      result.push(reparedInput.slice(i, i + 2));
    }
  }

  return result;
}
