import ClientEngine from './ClientEngine';
import sprites from '../configs/sprites';

class ClientGame {
  constructor(cfg) {
    Object.assign(this, {
      cfg,
    });

    this.engine = this.createEngine();
    this.initEngine();
  }

  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId));
  }

  initEngine() {
    this.engine
      .loadSprites(sprites)
      .then(() => {
        this.engine.on('render', (_, time) => {
          // console.log('!!! render:', time)
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
