const validateInput = (input) => {
  const data = {};
  if (input.user !== '' && input.user.length > 2 && input.score !== 0) {
    data.user = input.user;
    data.score = input.score;
    return data;
  }
  return false;
};

const errHandler = () => new Response(JSON.stringify({ message: 'The score could not be saved.' }));

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
  if (score.result === 'Leaderboard score created correctly.') {
    return score;
  }
  return false;
};

const getScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1jFd06GQ0jNaUanltu4w/scores/', { mode: 'cors', method: 'GET' }).catch(errHandler);
  const scores = await response.json();
  if (scores.result) {
    return scores;
  }
  return false;
};

const sortScores = (a, b) => {
  const scoreA = a.score;
  const scoreB = b.score;
  let comparison = 0;

  if (scoreA > scoreB) {
    comparison = -1;
  } else if (scoreA < scoreB) {
    comparison = 1;
  }
  return comparison;
};

export {
  validateInput, postScore, getScores, sortScores,
};