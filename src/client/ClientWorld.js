class ClientWorld {
  constructor(game, engine, levelCfg) {
    Object.assign(this, {
      game,
      engine,
      levelCfg,
      height: levelCfg.map.length,
      width: levelCfg.map[0].length,
    });
  }

  init() {
    this.levelCfg.world.forEach((item, indexX) => {
      item.forEach((i, indexY) => {
        this.engine.renderSpriteFrame({
          sprite: ['terrain', i[0][0]],
          frame: 0,
          x: (indexY * this.engine.canvas.width) / this.levelCfg.world.width,
          y: (indexX * this.engine.canvas.height) / this.levelCfg.world.height,
          w: this.engine.canvas.width /  this.levelCfg.world.width,
          h: this.engine.canvas.height / this.levelCfg.world.height,
        });
      })
    })
  }
}

export default ClientWorld;
