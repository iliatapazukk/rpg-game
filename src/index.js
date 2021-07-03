import './index.scss';
import gamePerson from './assets/Male-5-Walk.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const spriteW = 48;
const spriteH = 48;
const shots = 3;
let cycle = 0;

let bottomPressed = false;
let upPressed = false;
let leftPressed = false;
let rightPressed = false;
let pY = 374;
let pX = 374;

function keyDownHandler(event) {
  switch (event.key) {
    case 'ArrowDown' || 'Down':
      bottomPressed = true;
      break;
    case 'ArrowUp' || 'Up':
      upPressed = true;
      break;
    case 'ArrowLeft' || 'Left':
      leftPressed = true;
      break;
    case 'ArrowRight' || 'Right':
      rightPressed = true;
      break;
    default: // Do nothing
  }
}

function keyUpHandler(event) {
  switch (event.key) {
    case 'ArrowDown' || 'Down':
      bottomPressed = false;
      break;
    case 'ArrowUp' || 'Up':
      upPressed = false;
      break;
    case 'ArrowLeft' || 'Left':
      leftPressed = false;
      break;
    case 'ArrowRight' || 'Right':
      rightPressed = false;
      break;
  }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

const img = document.createElement('img');
img.src = gamePerson;

img.addEventListener('load', () => {
  setInterval(() => {
    bottomPressed === true
      ? (pY += 10)
      : upPressed === true
      ? (pY -= 10)
      : leftPressed === true
      ? (pX -= 10)
      : rightPressed === true
      ? (pX += 10)
      : null;
    cycle = (cycle + 1) % shots;
    ctx.clearRect(0, 0, 600, 600);
    ctx.drawImage(img, cycle * spriteW, 0, spriteW, spriteH, pX, pY, 48, 48);
  }, 120);
});

// let xy = 0
// setInterval(() => {
//   ctx.clearRect(0, 0, 600,600);
//   xy +=1;
//   ctx.fillStyle = 'red';
//   ctx.fillRect(xy, xy, 100, 100)
// }, 10)

// ctx.beginPath();
// ctx.moveTo(50,50)
// ctx.lineTo(550, 50)
// ctx.lineTo(50, 100)
// ctx.lineTo(550, 100)
// ctx.stroke()
