var number = function (busStops) {
  const reducedPeoplesOnEachStop = busStops.map((busStop) => {
    return busStop[0] - busStop[1];
  });

  const leftPeoples = reducedPeoplesOnEachStop.reduce(
    (acc, people) => (acc += people),
    0
  );

  return leftPeoples;
};
