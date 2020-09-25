const validateInput = (input) => {
  const data = {};
  if (input.user !== '' && input.user.length > 2) {
    data.user = input.user;
    data.score = input.score;
    return data;
  }
  return false;
};

const errHandler = () => new Response(JSON.stringify({ message: 'City not found.' }));

const postScore = async (data) => {
  let response = '';
  if (data) {
    response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1jFd06GQ0jNaUanltu4w/scores/', {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch(errHandler);
  }
  const score = await response.json();
  if (response === 'Leaderboard score created correctly.') {
    return score;
  }
  return false;
};

const getScores = async (validation) => {
  let response = '';
  if (validation) {
    response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1jFd06GQ0jNaUanltu4w/scores/', { mode: 'cors', method: 'GET' }).catch(errHandler);
  }
  const scores = await response.json();
  if (response === 'Leaderboard score created correctly.') {
    return scores;
  }
  return false;
};

export { validateInput, postScore, getScores };