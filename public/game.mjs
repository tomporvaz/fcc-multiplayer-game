import Player from './Player.mjs';
import Collectible from './Collectible.mjs';

//const socket = io();
const canvas = document.getElementById('game-window');
const context = canvas.getContext('2d');

export function draw(){
    console.log("Draw called");
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
}


