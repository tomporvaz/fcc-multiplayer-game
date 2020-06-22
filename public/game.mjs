import Player from './Player.mjs';
import Collectible from './Collectible.mjs';


//const socket = io();
const canvas = document.getElementById('game-window');
const context = canvas.getContext('2d');


function clear(){
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
}
let frame = 0;
function avatar() {
  const now = new Date();
  let sec = now.getSeconds();
  console.log(`${frame} / ${sec}`);
  
  if(frame % 14 === 0){
    clear();
    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(37, 37, 14, Math.PI / 4 , Math.PI * 7 / 4, false);
    context.lineTo(32, 37);
    context.fill();
  } else if (frame % 7 === 0) {
    clear();
    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(37, 37, 14, Math.PI / 12 , Math.PI * 23 / 12, false);
    context.lineTo(33, 37);
    context.fill();
  }
  frame++;
  window.requestAnimationFrame(avatar);
}



window.requestAnimationFrame(avatar);
