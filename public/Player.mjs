class Player {
  constructor(id, value, x, y, color) {
    this.id = id;
    this.value = value; //score
    this.x = x;
    this.y = y;
    this.color = color; //html color code
    this.direction = "RIGHT";
    
  }
  
  draw(context) {
    //initiate date and get Milliseconds to use a synchronizing constant
    const now = new Date();
    let ms = now.getMilliseconds();
    console.log(ms);
    
    //check if ms is in 1 of 8 alternating ranges in order to achieve an animation at 8 chomps per second
    //draw open pacman with an arc and line
    if( ( ms >= 0 && ms < 125 ) || ( ms >= 250 && ms < 375 ) || ( ms >= 500 && ms < 625 ) || ( ms >= 750 && ms < 875 )){
      context.fillStyle = this.color;
      context.save();
      context.translate(this.x, this.y)
      spin(context, this.direction)

      context.beginPath();
      context.arc(0, 0, 14, Math.PI / 4 , Math.PI * 7 / 4, false);
      context.lineTo( 0 - 4, 0 );
      context.fill();

      unspin(context, this.direction);
      context.translate( -this.x, -this.y );
      context.restore();
    }
    //draw an almost closed circle so pacman does leave a gohst shadow in animation (drwaing full circle left a gohst in animation).
    else if (( ms >= 125 && ms < 250 ) || ( ms >= 375 && ms < 500 ) || ( ms >= 625 && ms < 750 ) || ( ms >= 875 && ms < 1000 )) {
      context.fillStyle = this.color;
      context.translate(this.x, this.y)
      spin(context, this.direction)

      context.beginPath();
      context.arc(0, 0, 14, Math.PI / 12 , Math.PI * 23 / 12, false);
      context.lineTo( 0 - 4, 0 );
      context.fill();
      
      unspin(context, this.direction);
      context.translate( -this.x, -this.y );
      context.restore();
    }
  }
  
  movePlayer(dir, speed) {
    switch(dir){
      case "UP":
        console.log("Move player up");
        this.direction = "UP";
        this.y -= speed;
        break;
      case "DOWN":
        console.log("Move player down");
        this.direction = "DOWN";
        this.y += speed;
        break;
      case "LEFT":
        console.log("Move player left");
        this.direction = "LEFT";
        this.x -= speed;
        break;
      case "RIGHT":
        console.log("Move player right");
        this.direction = "RIGHT";
        this.x += speed;
        break;
    }
    
  }
  
  collision(item) {
    
  }
  
  calculateRank(arr) {
    
  }
}


export default Player;

//helper functions

//spin canvas based on direction of player
function spin(context, direction) {
  switch(direction){
    case "UP":
      context.rotate(Math.PI * 3 / 2);
      break;
    case "DOWN":
      context.rotate(Math.PI / 2);
      break;
    case "RIGHT":
      context.rotate(0);
      break;
    case "LEFT":
      context.rotate(Math.PI);
      break;
  }
}

//spin canvas based on direction of player
function unspin(context, direction) {
  switch(direction){
    case "UP":
      context.rotate(-Math.PI * 3 / 2);
      break;
    case "DOWN":
      context.rotate(-Math.PI / 2);
      break;
    case "RIGHT":
      context.rotate(0);
      break;
    case "LEFT":
      context.rotate(-Math.PI);
      break;
  }
}
