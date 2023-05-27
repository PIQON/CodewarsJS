function splitAndMerge(string, separator) {
  const wordsArray = string.split(" ");
  const result = wordsArray.map((word) => word.split("").join(separator));
  return result.join(" ");
}
