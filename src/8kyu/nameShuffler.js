function nameShuffler(str) {
  const [firstName, secondName] = str.split(" ");
  return `${secondName} ${firstName}`;
}
