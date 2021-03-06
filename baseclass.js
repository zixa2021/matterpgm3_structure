class Baseclass{
    constructor(x,y,width,height,color){
        var options={
            density:0.3,
            friction:0.4
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width ;
        this.height = height;
        this.color=color;
     }

     display(){
         var position = this.body.position;
         var angle = this.body.angle;
         push();
         fill (this.color);
         translate(position.x,position.y);
         rotate(angle)
         rectMode(CENTER);
         rect(0,0,this.width,this.height);
         pop();
     }
}