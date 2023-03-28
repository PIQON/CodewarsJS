export function getMiddle(s) {
  if (s.length % 2 === 0) {
    const index = s.length / 2 - 1;
    return s.slice(index, index + 2);
  }
  const index = Math.floor(s.length / 2);
  return s.slice(index, index + 1);
  //Code goes here!
}
