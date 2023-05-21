function isPangram(string) {
  const transformedString = string.toLowerCase();
  const charsArray = transformedString.split("");

  const filteredChars = new Set(
    charsArray.filter(
      (char) => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122
    )
  );

  return filteredChars.size === 26;
}
