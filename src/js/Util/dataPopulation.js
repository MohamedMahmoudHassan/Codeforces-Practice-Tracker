const populateChart = submissions => {
  const all = countSubmissions(submissions, "ALL");
  const ac = countSubmissions(submissions, "OK");
  const wa = countSubmissions(submissions, "WRONG_ANSWER");
  const tle = countSubmissions(submissions, "TIME_LIMIT_EXCEEDED");
  const others = all - (ac + wa + tle);
  return [ac, wa, tle, others];
};

const populateProblemsSolved = () => 20;

const populateSubmissions = submissions => countSubmissions(submissions, "ALL");

const populateMaxRateProblem = () => 1500;

const populateProblemsRatingSum = () => 10050;

const populateContestsParticipation = () => 3;

const populateVirtualsParticipation = () => 1;

const populatingTest = () => 7;
