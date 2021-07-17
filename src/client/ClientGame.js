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
      player: null,
    });

    this.engine = this.createEngine();
    this.map = this.createWorld();
    this.initEngine();
  }

  setPlayer(player) {
    this.player = player;
  }

  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId));
  }

  createWorld() {
    return new ClientWorld(this, this.engine, levelCfg);
  }

  initEngine() {
    this.engine.loadSprites(sprites).then(() => {
      this.map.init();
      this.engine.on('render', (_, time) => {
        this.map.render(time);
      });
      this.engine.start();
      this.initKeys();
      // отключение скролла клавишами при передвижении игрока
      window.addEventListener(
        'keydown',
        function (e) {
          if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) > -1) {
            e.preventDefault();
          }
        },
        false,
      );
    });
  }

  initKeys() {
    this.engine.input.onKey({
      ArrowLeft: (keydown) => {
        console.log('!!! ArrowLeft:');
        if (keydown) {
          this.player.moveByCellCoord(-1, 0, (cell) => {
            return cell.findObjectsByType('grass').length;
          });
        }
      },
    });
    this.engine.input.onKey({
      ArrowRight: (keydown) => {
        console.log('!!! ArrowRight:');
        if (keydown) {
          this.player.moveByCellCoord(+1, 0, (cell) => {
            return cell.findObjectsByType('grass').length;
          });
        }
      },
    });
    this.engine.input.onKey({
      ArrowUp: (keydown) => {
        console.log('!!! ArrowTop:');
        if (keydown) {
          this.player.moveByCellCoord(0, -1, (cell) => {
            return cell.findObjectsByType('grass').length;
          });
        }
      },
    });
    this.engine.input.onKey({
      ArrowDown: (keydown) => {
        console.log('!!! ArrowBottom:');
        if (keydown) {
          this.player.moveByCellCoord(0, +1, (cell) => {
            return cell.findObjectsByType('grass').length;
          });
        }
      },
    });
  }

  static init(cfg) {
    if (ClientGame.game) return;
    ClientGame.game = new ClientGame(cfg);
  }
}

export default ClientGame;
