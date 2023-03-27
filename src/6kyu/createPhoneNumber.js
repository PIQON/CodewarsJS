function createPhoneNumber(numbers) {
  const firstSequence = numbers.slice(0, 3);
  const secondSequence = numbers.slice(3, 6);
  const lastSequence = numbers.slice(6);
  return `(${firstSequence.join("")}) ${secondSequence.join(
    ""
  )}-${lastSequence.join("")}`;
}
