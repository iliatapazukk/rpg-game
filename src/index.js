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

function walk(timestamp) {
  console.log('!!! timestamp:', timestamp)
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
  ctx.drawImage(img, cycle * spriteW, direction, spriteW, spriteH, pX, pY, 48, 48);
  window.requestAnimationFrame(walk);
}

img.addEventListener('load', () => {
  requestAnimationFrame(walk);
});
