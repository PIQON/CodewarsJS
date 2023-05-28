function filter_list(l) {
  const onlyNumbersArray = l.filter((el) => typeof el !== "string");
  return onlyNumbersArray;
}
