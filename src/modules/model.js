/* eslint-disable no-underscore-dangle */
class Model {
  constructor() {
    this._soundOn = true;
    this._musicOn = true;
    this._bgMusicPlaying = false;
    this._score = 0;
    this._allScores = null;
  }

  set musicOn(value) {
    this._musicOn = value;
  }

  get musicOn() {
    return this._musicOn;
  }

  set soundOn(value) {
    this._soundOn = value;
  }

  get soundOn() {
    return this.soundOn;
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

  set allScores(values) {
    this._allScores = values;
  }

  get allScores() {
    return this._allScores;
  }
}

export default Model;