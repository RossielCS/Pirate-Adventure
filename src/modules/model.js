/* eslint-disable no-underscore-dangle */
class Model {
  constructor() {
    this._musicOn = true;
    this._bgMusicPlaying = false;
    this._score = 0;
    this._played = false;
    this._allScores = null;
  }

  set musicOn(value) {
    this._musicOn = value;
  }

  get musicOn() {
    return this._musicOn;
  }

  set bgMusicPlaying(value) {
    this._bgMusicPlaying = value;
  }

  get bgMusicPlaying() {
    return this._bgMusicPlaying;
  }

  set score(value) {
    this._score = value;
  }

  get score() {
    return this._score;
  }

  set played(value) {
    this._played = value;
  }

  get played() {
    return this._played;
  }

  set allScores(values) {
    this._allScores = values;
  }

  get allScores() {
    return this._allScores;
  }
}

export default Model;