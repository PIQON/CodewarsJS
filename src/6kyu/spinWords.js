const reverse = (word) => {
  return word.split("").reverse().join("");
};

function spinWords(string) {
  const words = string.split(" ");
  const mappedWords = words.map((word) =>
    word.length >= 5 ? reverse(word) : word
  );
  return mappedWords.join(" ");
}
