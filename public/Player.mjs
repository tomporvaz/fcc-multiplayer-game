class Player {
  constructor(id, value, x, y, color) {
    this.id = id;
    this.value = value; //score
    this.x = x;
    this.y = y;
    this.color = color; //html color code
    this.direction = "";  //may need to make this an object
    this.faceDirection = "RIGHT";
    this.speed = 5;

    
  }
  
  draw(context, canvas) {
    //initiate date and get Milliseconds to use a synchronizing constant
    const now = new Date();
    let ms = now.getMilliseconds();
    console.log("frame");
    this.movePlayer(this.direction, this.speed, canvas);
    if(this.direction){
      this.faceDirection = this.direction;
    };
    
    
    //check if ms is in 1 of 8 alternating ranges in order to achieve an animation at 8 chomps per second
    //draw open pacman with an arc and line
    if( ( ms >= 0 && ms < 125 ) || ( ms >= 250 && ms < 375 ) || ( ms >= 500 && ms < 625 ) || ( ms >= 750 && ms < 875 )){
      context.fillStyle = this.color;
      context.save();
      context.translate(this.x, this.y)
      spin(context, this.faceDirection)
      
      context.beginPath();
      context.arc(0, 0, 14, Math.PI / 4 , Math.PI * 7 / 4, false);
      context.lineTo( 0 - 4, 0 );
      context.fill();
      
      unspin(context, this.faceDirection);
      context.translate( -this.x, -this.y );
      context.restore();
    }
    //draw an almost closed circle so pacman does leave a gohst shadow in animation (drwaing full circle left a gohst in animation).
    else if (( ms >= 125 && ms < 250 ) || ( ms >= 375 && ms < 500 ) || ( ms >= 625 && ms < 750 ) || ( ms >= 875 && ms < 1000 )) {
      context.fillStyle = this.color;
      context.translate(this.x, this.y)
      spin(context, this.faceDirection)
      
      context.beginPath();
      context.arc(0, 0, 14, Math.PI / 12 , Math.PI * 23 / 12, false);
      context.lineTo( 0 - 4, 0 );
      context.fill();
      
      unspin(context, this.faceDirection);
      context.translate( -this.x, -this.y );
      context.restore();
    }
  }
  
  changeDirection(dir){
    this.direction = dir;
  }
  
  //wirte if then statements
  movePlayer(dir, speed, canvas) {
    console.log(this.y);
    
    if(dir === "UP") {
      console.log("Move player up");
      this.direction = "UP";
      this.y - speed > 14 ? this.y -= speed : this.y = 14;  //ADD BOUNDARIES
    };
    if( dir === "DOWN" ) { 
      console.log("Move player down");
      this.direction = "DOWN";
      this.y + speed < canvas.height - 14 ? this.y += speed : this.y = canvas.height - 14;
    }
    if( dir === "LEFT" ) {
      console.log("Move player left");
      this.direction = "LEFT";
      this.x - speed > 14 ? this.x -= speed : this.x = 14;
    }
    if( dir === "RIGHT") {
      console.log("Move player right");
      this.direction = "RIGHT";
      this.x + speed < canvas.width -14 ? this.x += speed : this.x = canvas.width - 14;
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
