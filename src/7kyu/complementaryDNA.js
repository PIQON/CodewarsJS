function DNAStrand(dna) {
  const DNA = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return dna
    .split("")
    .map((DNA_ITEM) => DNA[DNA_ITEM])
    .join("");
}
