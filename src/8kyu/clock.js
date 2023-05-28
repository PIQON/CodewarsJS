function past(h, m, s) {
  const MILISECONDS = 1000;
  const SECONDS = s * MILISECONDS;
  const MINUTES = m * 60 * MILISECONDS;
  const HOURS = h * 60 * 60 * MILISECONDS;
  return HOURS + MINUTES + SECONDS;
}
