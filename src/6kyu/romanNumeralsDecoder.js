export function solution(roman) {
  const ROMAN_NUMERALS = Object.freeze({
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  });

  const romanSymbols = roman.split("");

  const resultsNumbers = [];

  for (let i = 0; i < romanSymbols.length; i++) {
    const romanNumber = ROMAN_NUMERALS[romanSymbols[i]];
    const nextRomanNumber = ROMAN_NUMERALS[romanSymbols[i + 1]];
    if (romanNumber < nextRomanNumber) {
      resultsNumbers.push(nextRomanNumber - romanNumber);
      i++;
    } else {
      resultsNumbers.push(romanNumber);
    }
  }

  return resultsNumbers.reduce((acc, next) => (acc += next), 0);
}
