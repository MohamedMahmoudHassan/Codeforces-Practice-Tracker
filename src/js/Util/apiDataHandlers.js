const getSubmissions = (submissions, verdict) =>
  submissions.filter(submission => submission.verdict === verdict);

const countSubmissions = (submissions, verdict) =>
  verdict === "ALL" ? submissions.length : getSubmissions(submissions, verdict).length;

const isSameProblem = (p1, p2) => p1.name === p2.name && Math.abs(p1.contestId - p2.contestId) <= 1;
const removeDuplicateProblems = submissions => {
  submissions.sort((a, b) =>
    a.problem.name === b.problem.name
      ? a.problem.contestId - b.problem.contestId
      : a.problem.name < b.problem.name
      ? -1
      : 1
  );
  return submissions.filter(
    ({ problem }, index) => !index || !isSameProblem(submissions[index - 1].problem, problem)
  );
};

const getProblems = submissions => {
  const ac = getSubmissions(submissions, "OK");
  return removeDuplicateProblems(ac);
};

const getProblemsList = submissions => {
  const ac = getProblems(submissions);
  return ac.map(({ problem }) =>
    $("<li>").append(getProblemAsLink(problem), problem.rating ? ` - ${problem.rating}` : "")
  );
};

const getRatedProblems = submissions => {
  const ac = getProblems(submissions);
  return ac.filter(({ problem }) => problem.rating);
};

const countProblems = submissions => getProblems(submissions).length;

const getMaxRateProblem = submissions => {
  const ac = getRatedProblems(submissions);
  if (!ac.length) return "_";

  let maxProblem = ac[0].problem;
  ac.forEach(({ problem }) => {
    if (problem.rating && problem.rating > maxProblem.rating) maxProblem = problem;
  });

  return $("<span>").append(getProblemAsLink(maxProblem), ` - ${maxProblem.rating}`);
};

const getProblemsAverageRate = submissions => {
  const ac = getRatedProblems(submissions);
  if (!ac.length) return 0;

  let ratingSum = 0;
  ac.forEach(({ problem }) => (ratingSum += problem.rating));
  return Math.round(ratingSum / ac.length / 100) * 100;
};

const countContests = (submissions, participantType) => {
  const contests = [];
  submissions.forEach(submission => {
    if (submission.author.participantType === participantType)
      if (!contests.length || submission.contestId !== contests[contests.length - 1].contestId)
        contests.push(submission);
  });
  return contests.length;
};

const getUserMaxRating = (ratings, currentRating) => {
  ratings.forEach(({ newRating }) => {
    if (currentRating === "Unrated" || currentRating < newRating) currentRating = newRating;
  });
  return currentRating;
};

const getProblemAsLink = ({ contestId, index, name }) => {
  const href = `https://codeforces.com/problemset/problem/${contestId}/${index}`;
  const problemLink = $("<a>").text(`${index}. ${name}`);
  problemLink.attr("href", href);
  return problemLink;
};

const sliceSubmissions = (submissions, phaseStartTime, phaseEndTime) =>
  submissions.filter(
    ({ creationTimeSeconds }) =>
      creationTimeSeconds >= phaseStartTime && creationTimeSeconds <= phaseEndTime
  );

const sliceRatings = (ratings, phaseStartTime, phaseEndTime) =>
  ratings.filter(
    ({ ratingUpdateTimeSeconds }) =>
      ratingUpdateTimeSeconds >= phaseStartTime && ratingUpdateTimeSeconds <= phaseEndTime
  );

const getCurrentRating = (ratings, phaseStartTime) => {
  const prevRatings = ratings.filter(
    ({ ratingUpdateTimeSeconds }) => ratingUpdateTimeSeconds < phaseStartTime
  );
  return prevRatings.length ? prevRatings[prevRatings.length - 1].newRating : "Unrated";
};

const sliceAPIData = (apiData, phaseStartTime, phaseEndTime) => {
  const submissions = sliceSubmissions(apiData.submissions, phaseStartTime, phaseEndTime);
  const ratings = sliceRatings(apiData.ratings, phaseStartTime, phaseEndTime);
  const currentRating = getCurrentRating(apiData.ratings, phaseStartTime);
  const isLastSection =
    phaseStartTime <= apiData.submissions[apiData.submissions.length - 1].creationTimeSeconds;
  return { submissions, ratings, currentRating, isLastSection };
};
