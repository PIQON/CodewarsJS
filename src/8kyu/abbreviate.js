function abbrevName(name) {
  const [firstName, surname] = name.split(" ");
  return `${firstName[0].toUpperCase()}.${surname[0].toUpperCase()}`;
}
