connectToAPI = async handle => {
  const response = await fetch(`https://codeforces.com/api/user.status?handle=${handle}`);
  const jsonResponse = await response.json();
  const submissions = jsonResponse.result;
  return submissions;
};
