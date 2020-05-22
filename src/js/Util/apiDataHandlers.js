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

  const { index, name, rating } = maxProblem;
  return `${index}.${name} - ${rating}`;
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
