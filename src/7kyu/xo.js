export function XO(str) {
  const loweredStr = str.toLowerCase();
  const chars = {
    x: 0,
    o: 0,
  };

  loweredStr.split("").forEach((char) => {
    chars[char]++;
  });

  return chars.o === chars.x;
}
