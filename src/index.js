import './index.scss';
import gamePerson from './assets/Male-5-Walk.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const spriteW = 48;
const spriteH = 48;
const shots = 3;
let cycle = 0;

let arrKeyPressed = false;
let bottomPressed = false;
let upPressed = false;
let leftPressed = false;
let rightPressed = false;
const rect = 600;
let pY = rect/2 - spriteW/2;
let pX = rect/2 - spriteH/2;
let direction = 0

function keyDownHandler(event) {
  event.preventDefault()
  arrKeyPressed = true;
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
  arrKeyPressed = false
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
    arrKeyPressed ? cycle = (cycle + 1) % shots : null;
    if (bottomPressed === true) {
      pY += 10;
      if (pY > rect - 48) {
        pY = rect - 48
      }
      direction = 0;
    } else if (upPressed === true) {
      pY -= 10;
      if (pY < 0) {
        pY = 0
      }
      direction = 144;
    } else if (leftPressed === true) {
      pX -= 10;
      if (pX < 0) {
        pX = 0
      }
      direction = 48;
    } else if (rightPressed === true) {
      pX += 10
      if (pX > rect - 48) {
        pX = rect - 48
      }
      direction = 96;
    }

    ctx.clearRect(0, 0, rect, rect);

    ctx.beginPath();
    ctx.moveTo(50,50)
    ctx.lineTo(550, 50)
    ctx.lineTo(50, 100)
    ctx.lineTo(550, 100)

    ctx.moveTo(50,160)
    ctx.lineTo(550, 150)
    ctx.lineTo(50, 200)
    ctx.lineTo(550, 200)

    ctx.moveTo(50,250)
    ctx.lineTo(550, 250)
    ctx.lineTo(50, 300)
    ctx.lineTo(550, 300)

    ctx.stroke()

    ctx.drawImage(img, cycle * spriteW, direction, spriteW, spriteH, pX, pY, 48, 48);

    console.log('!!! position:', pX)
  }, 120);
});

ctx.beginPath();
ctx.moveTo(50,50)
ctx.lineTo(550, 50)
ctx.lineTo(50, 100)
ctx.lineTo(550, 100)
ctx.stroke()
