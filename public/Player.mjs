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
    
    //check if ms is in 1 of 8 alternating ranges in order to achieve an animation at 8 chomps per second
    //draw open pacman with an arc and line
    if( ( ms >= 0 && ms < 125 ) || ( ms >= 250 && ms < 375 ) || ( ms >= 500 && ms < 625 ) || ( ms >= 750 && ms < 875 )){
      context.fillStyle = this.color;
      context.beginPath();
      context.arc(this.x, this.y, 14, Math.PI / 4 , Math.PI * 7 / 4, false);
      context.lineTo( this.x - 4, this.y );
      context.fill();
    }
    //draw an almost closed circle so pacman does leave a gohst shadow in animation (drwaing full circle left a gohst in animation).
    else if (( ms >= 125 && ms < 250 ) || ( ms >= 375 && ms < 500 ) || ( ms >= 625 && ms < 750 ) || ( ms >= 875 && ms < 1000 )) {
      context.fillStyle = this.color;
      context.beginPath();
      context.arc(this.x, this.y, 14, Math.PI / 12 , Math.PI * 23 / 12, false);
      context.lineTo( this.x - 4, this.y );
      context.fill();
    }
  }
  
  movePlayer(dir, speed) {
    switch(dir){
      case "UP":
        console.log("Move player up");
        this.y -= speed;
        break;
      case "DOWN":
        console.log("Move player down");
        this.y += speed;
        break;
      case "LEFT":
      console.log("Move player left");
      this.x -= speed;
      break;
      case "RIGHT":
      console.log("Move player right");
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
