import EventSourceMixin from '../common/EventSourceMixin';

class ClientEngine {
  constructor(canvas) {
    Object.assign(this, {
      canvas,
      ctx: null,
      imageLoader: [],
      sprites: {},
      images: {},
    });
    this.ctx = canvas.getContext('2d');
    this.loop = this.loop.bind(this);
  }

  start() {
    this.loop();
  }

  loop(timestamp) {
    const { ctx, canvas } = this;
    ctx.fillStyle = 'black';
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.trigger('render', timestamp);
    this.initNextFrame();
  }

  initNextFrame() {
    window.requestAnimationFrame(this.loop);
  }

  loadSprites(spritesGroup) {
    this.imageLoader = [];

    for (let groupName in spritesGroup) {
      const group = spritesGroup[groupName];
      this.sprites[groupName] = group;

      for (let spriteName in group) {
        const { img } = group[spriteName];
        if (!this.images[img]) {
          this.imageLoader.push(this.loadImage(img));
        }
      }
    }
    return Promise.all(this.imageLoader);
  }

  loadImage(url) {
    return new Promise((resolve) => {
      const i = new Image();
      this.images[url] = i;
      i.onload = () => resolve(i);
      i.src = url;
    });
  }
}

Object.assign(ClientEngine.prototype, EventSourceMixin);

export default ClientEngine;
