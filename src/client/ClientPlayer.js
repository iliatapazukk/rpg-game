import ClientGameObject from './ClientGameObject';

class ClientPlayer extends ClientGameObject {
  constructor(cfg) {
    super(cfg);

    this.playerName = 'Сhewbacca';
    const world = cfg.cell.world;
    world.game.setPlayer(this);

  }

  render(time) {
    super.render(time);

    const { world } = this;
    world.engine.renderSign({
      x: this + world.cellWidth / 2,
      y: this - 15,
      minWidth: world.cellWidth,
      maxWidth: world.cellWidth * 1.5,
      text: this.playerName,

    });
  }
}

export default ClientPlayer;
