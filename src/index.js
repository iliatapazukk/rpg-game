import './index.scss';
import gamePerson from './assets/Male-5-Walk.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const spriteW = 48;
const spriteH = 48;
const shots = 3;
let cycle = 0;

const img = document.createElement('img');
img.src = gamePerson;

img.addEventListener('load', () => {
  setInterval(() => {
    cycle =(cycle + 1) % shots;
    ctx.clearRect(0, 0, 600, 600)
    ctx.drawImage(img, cycle * spriteW, 0, spriteW, spriteH, 0, 0, 100, 100)
  }, 120)
})

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

