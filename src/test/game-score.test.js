import 'babel-polyfill';
import {
  validateInput, postScore, getScores, sortScores,
} from '../modules/game-score';

// validateInput
describe('It should validate the user name and score', () => {
  const inputTest = { user: 'Alan', score: 740 };
  const input = { user: '', score: 740 };

  test('It should return an object if the value of user name is different from an empty string', () => {
    const input = {};
    input.user = 'Alan';
    input.score = 740;
    expect(validateInput(input)).toEqual(inputTest);
  });

  test('It should return false if the value of user name is an empty string', () => {
    expect(validateInput(input)).toBe(false);
  });

  test('It should return false if the value of user name it has a length less than three', () => {
    input.user = 'Lo';
    expect(validateInput(input)).toBe(false);
  });

  test('It should return false if the value of user score is equal to zero', () => {
    input.score = 0;
    expect(validateInput(input)).toBe(false);
  });
});

// getScores
describe('It should communicate with the API and save or retrieve users\' scores', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({ result: [{ user: 'Bob', score: 250 }] }),
  }));

  test('It should return all users\' scores', async () => {
    const scores = await getScores();
    expect(scores).toEqual({ result: [{ user: 'Bob', score: 250 }] });
  });

  test('It should return a string if it could not return the scores', async () => {
    fetch.mockImplementationOnce(() => Promise.reject());
    const scores = await getScores();

    expect(scores).toEqual(false);
  });

  test('It should save the user\'s score', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve({ result: 'Leaderboard score created correctly.' }),
    }));
    const scores = await postScore({ user: 'Bob', score: 250 });
    expect(scores).toEqual({ result: 'Leaderboard score created correctly.' });
  });

  test('It should save the user\'s score', async () => {
    fetch.mockImplementationOnce(() => Promise.reject());
    const scores = await postScore({ user: 'Bob', score: 250 });
    expect(scores).toEqual(false);
  });
});

// sortScores
describe('It should compare two users\' scores', () => {
  test('It should return -1 if a is greater than b', () => {
    const a = { score: 10 };
    const b = { score: 5 };
    expect(sortScores(a, b)).toBe(-1);
  });

  test('It should return 0 if a is equal to b', () => {
    const a = { score: 5 };
    const b = { score: 5 };
    expect(sortScores(a, b)).toBe(0);
  });

  test('It should return 1 if a is less than b', () => {
    const a = { score: 10 };
    const b = { score: 15 };
    expect(sortScores(a, b)).toBe(1);
  });
});
