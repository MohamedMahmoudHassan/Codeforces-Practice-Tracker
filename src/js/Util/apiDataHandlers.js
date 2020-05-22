const countSubmissions = (submissions, verdict) => {
  if (verdict === "ALL") return submissions.length;
  return submissions.filter(submission => submission.verdict === verdict).length;
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
