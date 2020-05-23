connectToAPI = async handle => {
  const submissionsRes = await fetch(`https://codeforces.com/api/user.status?handle=${handle}`);
  const submissionsJsonRes = await submissionsRes.json();
  const submissions = submissionsJsonRes.result;

  const ratingsRes = await fetch(`https://codeforces.com/api/user.rating?handle=${handle}`);
  const ratingsJsonRes = await ratingsRes.json();
  const ratings = ratingsJsonRes.result;

  return { submissions, ratings };
};
