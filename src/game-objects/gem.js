const createGem = (repeat, x, y) => ({
  key: 'diamond',
  repeat,
  setXY: {
    x,
    y,
    stepX: 0,
  },
  setScale: {
    x: 2,
    y: 2,
  },
  allowGravity: false,
  runChildUpdate: (group, posX, posY) => {
    group.getChildren().forEach(element => {
      if (!element.active) {
        element.enableBody(true, posX + 48, posY - 48, true, true);
        element.setVelocityX(-200);
      }
    });
  },
});

export default createGem;