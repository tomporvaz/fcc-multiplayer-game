import Player from './Player.mjs';
import Collectible from './Collectible.mjs';


//const socket = io();
const canvas = document.getElementById('game-window');
let ctx = canvas.getContext('2d');

//keyboard event
addEventListener('keydown', (event) =>{
  console.log(event.key);
  switch(event.key){
    case 'ArrowUp':
    case 'w':
      player1.movePlayer("UP", 5);
      break
    
    case 'ArrowDown':
    case 's':
      player1.movePlayer("DOWN", 5)
      break;
    case 'ArrowLeft':
    case 'a':
      player1.movePlayer("LEFT", 5);
      break;
    case 'ArrowRight':
    case 'd':
      player1.movePlayer("RIGHT", 5);
      break;
  }
})



let player1 = new Player("player1", 0, 50, 100, "yellow");

function animate() {
  clear(ctx);

  player1.draw(ctx);
  window.requestAnimationFrame(animate);
}



window.requestAnimationFrame(animate);


//helper functions
function clear(context){
  const cnvs = document.getElementById('game-window');
  context.fillStyle = "black";
  context.fillRect(0, 0, cnvs.width, cnvs.height);
}
