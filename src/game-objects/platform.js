const createPlatform = (repeat, x, y, width) => ({
  key: 'terrain',
  repeat,
  setXY: {
    x,
    y,
    stepX: 300,
  },
  setScale: {
    x: 1,
    y: 1,
  },
  active: true,
  visible: true,
  velocityX: 0,
  allowGravity: false,
  immovable: true,
  runChildUpdate: (x) => {
    x.x = width;
    x.y = (Math.random() * 100) + 150;
  },
});

export default createPlatform;