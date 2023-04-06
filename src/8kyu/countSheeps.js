function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((sheep) => Boolean(sheep)).length;
}
