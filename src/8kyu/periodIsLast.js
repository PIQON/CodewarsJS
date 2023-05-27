function periodIsLate(last, today, cycleLength) {
  const timePassed = today - last;
  const daysPassed = Math.ceil(timePassed / (1000 * 3600 * 24));
  return daysPassed > cycleLength;
}
