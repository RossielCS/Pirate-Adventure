import {
  validateInput, sortScores,
} from '../modules/game-score';

describe('Game Score', () => {
  const inputTest = {
    user: 'Alan',
    score: 740,
  };

  test('It should return an object if the value of user name is different from an empty string', () => {
    const input = {};
    input.user = 'Alan';
    input.score = 740;
    expect(validateInput(input)).toEqual(inputTest);
  });

  test('It should return false if the value of user name is an empty string', () => {
    const input = {};
    input.user = '';
    input.score = 740;
    expect(validateInput(input)).toBe(false);
  });
});
