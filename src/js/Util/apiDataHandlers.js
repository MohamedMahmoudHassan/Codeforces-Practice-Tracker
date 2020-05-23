const getSubmissions = (submissions, verdict) =>
  submissions.filter(submission => submission.verdict === verdict);

const countSubmissions = (submissions, verdict) =>
  verdict === "ALL" ? submissions.length : getSubmissions(submissions, verdict).length;

const isSameProblem = (p1, p2) => p1.name === p2.name && Math.abs(p1.contestId - p2.contestId) <= 1;

const removeDuplicateProblems = submissions => {
  submissions.sort((a, b) => a.problem.name < b.problem.name);
  return submissions.filter(
    ({ problem }, index) => !index || !isSameProblem(submissions[index - 1].problem, problem)
  );
};

const getProblems = submissions => {
  const ac = getSubmissions(submissions, "OK");
  return removeDuplicateProblems(ac);
};

const countProblems = submissions => getProblems(submissions).length;

const getMaxRateProblem = submissions => {
  const ac = getProblems(submissions);
  if (!ac.length) return "_";

  let maxProblem = ac[0].problem;
  ac.forEach(({ problem }) => {
    if (problem.rating && problem.rating > maxProblem.rating) maxProblem = problem;
  });

  if (!maxProblem.rating) return "_";
  return $("<span>").append(getProblemAsLink(maxProblem), ` - ${maxProblem.rating}`);
};

const sumProblemsRating = submissions => {
  const ac = getProblems(submissions);
  let ratingSum = 0;
  ac.forEach(({ problem }) => (ratingSum += problem.rating));
  return ratingSum;
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
  return { submissions, ratings, currentRating };
};
