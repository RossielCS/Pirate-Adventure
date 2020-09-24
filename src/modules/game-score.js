const validateInput = (input) => {
  const data = {};
  if (input.user !== '' && input.user.length > 2) {
    data.user = input.user;
    data.score = input.score;
    return data;
  }
  return false;
};


