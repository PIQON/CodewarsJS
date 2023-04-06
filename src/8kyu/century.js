function century(year) {
  // Finish this :)
  return year % 100 > 0 ? Math.trunc(year / 100) + 1 : Math.trunc(year / 100);
}
