import Player from './Player.mjs';
import Collectible from './Collectible.mjs';


//const socket = io();
const canvas = document.getElementById('game-window');
let ctx = canvas.getContext('2d');

//keyboard event
 document.onkeydown = (event) => {
  console.log(event.key);
 
    if(event.key === 'ArrowUp' || event.key === 'w') { player1.changeDirection("UP")};
    if(event.key === 'ArrowDown' || event.key === 's') { player1.changeDirection("DOWN") };
    if(event.key === 'ArrowLeft' || event.key === 'a') { player1.changeDirection("LEFT") };
    if(event.key === 'ArrowRight' || event.key === 'd') { player1.changeDirection("RIGHT") };

    //for testing Collectible.renew()
    if(event.key === "Enter") { collectible1.renew() };

  };

  /* document.onkeyup = (event) => {
    if(event.key === 'ArrowUp' || event.key === 'w') { player1.changeDirection("")};
    if(event.key === 'ArrowDown' || event.key === 's') { player1.changeDirection("") };
    if(event.key === 'ArrowLeft' || event.key === 'a') { player1.changeDirection("") };
    if(event.key === 'ArrowRight' || event.key === 'd') { player1.changeDirection("") };
  }
 */

let player1 = new Player("player1", 0, 50, 100, "yellow");
let collectible1 = new Collectible("collectible1", 100, 400, 400);

function animate() {
  clear(ctx);
  collectible1.draw(ctx, canvas);
  player1.draw(ctx, canvas);
  window.requestAnimationFrame(animate);
}



window.requestAnimationFrame(animate);


//helper functions
function clear(context){
  const cnvs = document.getElementById('game-window');
  context.fillStyle = "black";
  context.fillRect(0, 0, cnvs.width, cnvs.height);
}
