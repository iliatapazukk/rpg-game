class ClientWorld {
  constructor(game, engine, levelCfg, camera) {
    Object.assign(this, {
      game,
      engine,
      levelCfg,
      height: levelCfg.map.length,
      width: levelCfg.map[0].length,
      camera: levelCfg.camera,
    });
  }

  init() {
    this.levelCfg.map.forEach((item, rowX) => {
      item.forEach((i, rowY) => {
        this.engine.renderSpriteFrame({
          sprite: ['terrain', i[0][0]],
          frame: 0,
          x: (rowY * this.engine.canvas.width) / this.levelCfg.camera.width,
          y: (rowX * this.engine.canvas.height) / this.levelCfg.camera.height,
          w: this.engine.canvas.width / this.levelCfg.camera.width,
          h: this.engine.canvas.height / this.levelCfg.camera.height,
        });
      });
    });
  }
}

export default ClientWorld;
