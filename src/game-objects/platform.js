const createPlatform = (repeat, x, y, width) => ({
  key: 'terrain',
  repeat,
  setXY: {
    x,
    y,
    stepX: 300,
  },
  setScale: {
    x: 1.3,
    y: 1.3,
  },
  active: true,
  visible: true,
  velocityX: 0,
  allowGravity: false,
  immovable: true,
  frictionX: 1,
  runChildUpdate: (element) => {
    element.x = width;
    element.y = (Math.random() * 138) + y;
  },
});

export default createPlatform;