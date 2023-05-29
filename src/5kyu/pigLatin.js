function pigIt(str) {
  const PUNCTUATION_MARKS = [",", "'", "!", "-", ".", "?"];

  const wordsArray = str.split(" ");
  const piggedArray = wordsArray.map((word) => {
    if (PUNCTUATION_MARKS.includes(word)) return word;
    const firstLetter = word[0];
    return `${word.slice(1)}${firstLetter}ay`;
  });

  return piggedArray.join(" ");
}
