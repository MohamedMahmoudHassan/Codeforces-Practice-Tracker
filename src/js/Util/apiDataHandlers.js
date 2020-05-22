const getSubmissions = (submissions, verdict) =>
  submissions.filter(submission => submission.verdict === verdict);

const countSubmissions = (submissions, verdict) =>
  verdict === "ALL" ? submissions.length : getSubmissions(submissions, verdict).length;

const countProblems = submissions => {
  const ac = getSubmissions(submissions, "OK");
  return ac.length;
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
