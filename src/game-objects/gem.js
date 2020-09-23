const createGem = (repeat, x, y) => ({
  key: 'diamond',
  repeat,
  setXY: {
    x,
    y,
    stepX: 50,
  },
  setScale: {
    x: 2,
    y: 2,
  },
  bounceY: 0.2,
});

export default createGem;