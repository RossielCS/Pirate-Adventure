const creatCloud = (repeat, x) => ({
  key: 'bigClouds',
  repeat,
  setXY: {
    x,
    y: 185,
    stepX: 448,
  },
  setScale: {
    x: 1,
    y: 1,
  },
  velocityX: 0,
  allowGravity: false,
  immovable: true,
  runChildUpdate: (element) => {
    element.x = 893;
  },
});

export default creatCloud;