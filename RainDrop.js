class RainDrops{
    constructor(x,y,radius){
        this.body = ellipse(x,y,radius);
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.velocityY  = random(2,5);
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
    }
     fall(speed){
        this.y +=speed;
    }
  
    display(){
        
        push();
        colorMode(HSB);
        noStroke();
        //translate(pos.x,pos.y);
       
        fill(this.color);
        ellipse(this.x, this.y, this.radius);
        pop();
    }
  }