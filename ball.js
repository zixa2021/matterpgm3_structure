class Ball{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius);
        World.add(world,this.body);
        this.radius = radius ;
        
     }

     display(){
         var position = this.body.position;
         var angle = this.body.angle;
         push();
         translate(position.x,position.y);
         rotate(angle);
         fill ("green");
         ellipseMode(RADIUS);
         ellipse(0,0,this.radius,this.radius);
         pop();
     }
}