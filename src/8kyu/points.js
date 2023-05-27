function points(games) {
  const gamesPoints = games.map((game) => {
    const [firstTeamGoals, secondTeamGoals] = game.split(":");
    if (firstTeamGoals > secondTeamGoals) return 3;
    if (firstTeamGoals < secondTeamGoals) return 0;
    if (firstTeamGoals === secondTeamGoals) return 1;
  });

  const firstTeamGoalsPoints = gamesPoints.reduce(
    (acc, next) => (acc += next),
    0
  );

  return firstTeamGoalsPoints;
}
