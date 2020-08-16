class Block2 {
    constructor(x,y,width,height) {
      var options = {
        density:0.1,
 
       
        restitution:1.2,
        friction:9.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
     
     
      if(this.body.speed <5){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke(0);
      strokeWeight(4);      
      fill(rgb(255, 192, 203));
        rect(0,0,this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        pop();
    };
    }
  };
  