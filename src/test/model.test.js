import Model from '../modules/model';

describe('Model', () => {
  const model = new Model();
  const testScores = [
    { user: 'Alan', score: 680 },
    { user: 'Jessica', score: 970 },
  ];

  test('It should return true if the music is on', () => {
    expect(model.musicOn).toBe(true);
  });

  test('It should return false if the music is off', () => {
    model.musicOn = false;
    expect(model.musicOn).toBe(false);
  });

  test('It should change the value of musicOn to false', () => {
    model.musicOn = false;
    expect(model.musicOn).toBe(false);
  });

  test('It should return false if the background music is off', () => {
    expect(model.bgMusicPlaying).toBe(false);
  });

  test('It should change the value of bgMusicPlaying', () => {
    model.bgMusicPlaying = true;
    expect(model.bgMusicPlaying).toBe(true);
  });

  test('It should return zero witch if the user has not acumulated points', () => {
    expect(model.score).toBe(0);
  });

  test('It should change the value of scores', () => {
    model.score += 10;
    expect(model.score).toBe(10);
  });

  test('It should return false if the user has not played the game', () => {
    expect(model.played).toBe(false);
  });

  test('It should change the value of played to true', () => {
    model.played = true;
    expect(model.played).toBe(true);
  });

  test('It should return null if is has not been saved user\'s scores', () => {
    expect(model.allScores).toBe(null);
  });

  test('It should change allScores value to an array of objects', () => {
    model.allScores = [
      { user: 'Alan', score: 680 },
      { user: 'Jessica', score: 970 },
    ];
    expect(model.allScores).toEqual(testScores);
  });
});