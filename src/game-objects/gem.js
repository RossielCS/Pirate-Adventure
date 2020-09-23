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
  active: true,
  visible: true,
  velocityX: 0,
  // allowGravity: false,
  immovable: true,
});

export default createGem;