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

  test('It should return false if the value of user name it has a length less than three', () => {
    const input = {};
    input.user = 'Lo';
    input.score = 740;
    expect(validateInput(input)).toBe(false);
  });

  test('It should return false if the value of user score is equal to zero', () => {
    const input = {};
    input.user = 'Martha';
    input.score = 0;
    expect(validateInput(input)).toBe(false);
  });

  test('It should return -1 if a is greater than b', () => {
    expect(sortScores(10, 5)).toBe(-1);
  });

  test('It should return 0 if a is equal to b', () => {
    expect(sortScores(5, 5)).toBe(0);
  });

  test('It should return 1 if a is less than b', () => {
    expect(sortScores(10, 15)).toBe(1);
  });
});
