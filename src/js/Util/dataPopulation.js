const populateChart = submissions => {
  const all = countSubmissions(submissions, "ALL");
  const ac = countSubmissions(submissions, "OK");
  const wa = countSubmissions(submissions, "WRONG_ANSWER");
  const tle = countSubmissions(submissions, "TIME_LIMIT_EXCEEDED");
  const others = all - (ac + wa + tle);
  return [ac, wa, tle, others];
};

const populateUserMaxRating = ({ ratings, currentRating }) =>
  getUserMaxRating(ratings, currentRating);

const populateProblemsSolved = ({ submissions }) => countProblems(submissions);

const populateSubmissions = ({ submissions }) => countSubmissions(submissions, "ALL");

const populateMaxRateProblem = ({ submissions }) => getMaxRateProblem(submissions);

const populateProblemsRatingSum = ({ submissions }) => sumProblemsRating(submissions);

const populateContestsParticipation = ({ submissions }) => countContests(submissions, "CONTESTANT");

const populateVirtualsParticipation = ({ submissions }) => countContests(submissions, "VIRTUAL");
