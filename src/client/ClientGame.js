import ClientEngine from './ClientEngine';
import ClientWorld from './ClientWorld';
import sprites from '../configs/sprites';
import levelCfg from '../configs/world.json';
import gameObjects from '../configs/gameObjects.json';

class ClientGame {
  constructor(cfg) {
    Object.assign(this, {
      cfg,
      gameObjects,
    });

    this.engine = this.createEngine();
    this.map = this.createWorld();
    this.initEngine();
  }

  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId));
  }

  createWorld() {
    return new ClientWorld(this, this.engine, levelCfg);
  }

  initEngine() {
    this.engine.loadSprites(sprites).then(() => {
      console.log('!!! initEngine:');
      this.map.init();
      this.engine.on('render', (_, time) => {
        this.map.render(time);
      });
      this.engine.start();
    });
  }

  static init(cfg) {
    if (ClientGame.game) return;
    ClientGame.game = new ClientGame(cfg);
  }
}

export default ClientGame;
