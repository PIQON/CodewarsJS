function pillars(numPill, dist, width) {
  if (numPill === 1) return 0;
  const centimetersDist = dist * 100;
  if (numPill === 2) return centimetersDist;
  const pillarsWidth = (numPill - 2) * width;
  return (numPill - 1) * centimetersDist + pillarsWidth;
  // your code here
}
