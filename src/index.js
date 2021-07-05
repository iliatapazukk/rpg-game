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
const rect = canvas.offsetWidth;
const canvasW = canvas.getBoundingClientRect().width;
const canvasH = canvas.getBoundingClientRect().height;
let pY = canvasH / 2 - spriteW / 2;
let pX = canvasW / 2 - spriteH / 2;
let direction = 0;

function keyDownHandler(event) {
  event.preventDefault();
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
  arrKeyPressed = false;
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
    arrKeyPressed ? (cycle = (cycle + 1) % shots) : null;
    if (bottomPressed === true) {
      pY += 10;
      if (pY > canvasH - spriteH) {
        pY = canvasH - spriteH;
      }
      direction = 0;
    } else if (upPressed === true) {
      pY -= 10;
      if (pY < 0) {
        pY = 0;
      }
      direction = spriteH * 3;
    } else if (leftPressed === true) {
      pX -= 10;
      if (pX < 0) {
        pX = 0;
      }
      direction = spriteW;
    } else if (rightPressed === true) {
      pX += 10;
      if (pX > canvasW - spriteW) {
        pX = canvasW - spriteW;
      }
      direction = spriteW * 2;
    }

    ctx.clearRect(0, 0, rect, rect);

    // background temp
    let radius = 0;
    let angle = 0;
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#0096FF';
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    for (let n = 0; n < rect; n++) {
      radius += 0.75;
      angle += (Math.PI * 2) / 50;
      const x = canvas.width / 2 + radius * Math.cos(angle);
      const y = canvas.height / 2 + radius * Math.sin(angle);
      ctx.lineTo(x, y);
    }

    ctx.stroke();

    ctx.drawImage(img, cycle * spriteW, direction, spriteW, spriteH, pX, pY, 48, 48);

    console.log('!!! position:', pX);
  }, 120);
});

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(550, 50);
ctx.lineTo(50, 100);
ctx.lineTo(550, 100);
ctx.stroke();
