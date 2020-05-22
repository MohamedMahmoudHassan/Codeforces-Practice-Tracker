const getSubmissions = (submissions, verdict) =>
  submissions.filter(submission => submission.verdict === verdict);

const countSubmissions = (submissions, verdict) =>
  verdict === "ALL" ? submissions.length : getSubmissions(submissions, verdict).length;

const getProblems = submissions => getSubmissions(submissions, "OK");
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

const getProblemAsLink = ({ contestId, index, name }) => {
  const href = `https://codeforces.com/problemset/problem/${contestId}/${index}`;
  const problemLink = $("<a>").text(`${index}. ${name}`);
  problemLink.attr("href", href);
  return problemLink;
};

const sliceSubmissions = (submissions, phaseStartTime, phaseEndTime) => {
  const result = [];

  for (let i = 0; i < submissions.length; i++) {
    const time = submissions[i].creationTimeSeconds;
    if (time < phaseStartTime) break;
    if (time <= phaseEndTime) result.push(submissions[i]);
  }

  return result;
};
