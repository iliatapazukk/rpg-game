import ClientEngine from './ClientEngine';

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
    this.engine.start();
  }

  static init(cfg) {
    if (ClientGame.game) return;
    ClientGame.game = new ClientGame(cfg);
    console.log('!!! Game init');
  }
}

export default ClientGame;
