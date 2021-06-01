class Hit extends Baseclass{
    constructor(x,y,width,height,color){
        super(x,y,width,height,color);
     }

     display(){
         this.body.position.x = mouseX;
         this.body.position.y = mouseY;
         super.display();
     }
}