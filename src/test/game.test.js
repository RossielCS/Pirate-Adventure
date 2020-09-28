import 'babel-polyfill';
import 'jest-canvas-mock';
import Game from '../scenes/game';

describe('It should update the score text', () => {
  test('It should increment by ten the value of score', () => {
    const game = new Game();
    game.score = 10;
    game.updateScore();
    expect(game.score).toEqual(20);
  });
});
