import Model from '../modules/model';

describe('Model', () => {
  const model = new Model();
  const scores = [
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
});