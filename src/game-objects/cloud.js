const creatCloud = (repeat, x, width) => ({
  key: 'bigClouds',
  repeat,
  setXY: {
    x,
    y: 185,
    stepX: 492.8,
  },
  setScale: {
    x: 1.1,
    y: 1.1,
  },
  velocityX: 0,
  allowGravity: false,
  immovable: true,
  runChildUpdate: (element) => {
    element.x = width;
  },
});

export default creatCloud;