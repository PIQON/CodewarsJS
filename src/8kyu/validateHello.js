function validateHello(greetings) {
  const valid = /(ahoj)|(hello)|(ciao)|(salut)|(hallo)|(hola)|(czesc)/.test(
    greetings.toLowerCase()
  );
  return valid;
}
