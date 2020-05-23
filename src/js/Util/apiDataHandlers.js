const getSubmissions = (submissions, verdict) =>
  submissions.filter(submission => submission.verdict === verdict);

const countSubmissions = (submissions, verdict) =>
  verdict === "ALL" ? submissions.length : getSubmissions(submissions, verdict).length;

const isSameProblem = (p1, p2) => p1.name !== p2.name;

const removeDuplicateProblems = problems => {
  problems.sort((a, b) => a.problem.name < b.problem.name);
  return problems.filter(
    (problem, index) => !index || !isSameProblem(problems[index - 1], problem)
  );
};

const getProblems = submissions => {
  const problems = getSubmissions(submissions, "OK");
  return removeDuplicateProblems(problems);
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
