const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var boxl1,boxl2;
var boxg1,boxg2;
var ground;
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    
    //light blue
    boxl1 = new Box1(600,350,100,30,"lightblue");
    boxl2 = new Box1(400,350,100,30,"lightblue");
    boxl3 = new Box1(580,300,100,100,"lightblue");
    boxl4 = new Box1(215,250,100,100,"lightblue");
    boxl5 = new Box1(215,200,40,30,"lightblue");
    boxl6 = new Box1(400,100,400,10,"lightblue");

    //grey
    boxg1 = new Box2(200,300,100,30,"grey");
    boxg2 = new Box2(400,300,100,100,"grey");
    boxg3 = new Box2(220,150,40,30,"grey");
    boxg4 = new Box2(400,150,40,30,"grey");
    boxg5 = new Box2(580,150,40,30,"grey");
    boxg6 = new Box2(400,100,40,30,"grey");
    boxg7 = new Box2(580,100,40,30,"grey");

    //ball
    ball1 = new Ball(400,50,10);
    ball2 = new Ball(360,350,10);
    ball3 = new Ball(450,350,10);

    hit = new Hit(50,50,20,20,"red");

    ground = new Ground(400,380,800,20);
    
}

function draw(){
 
    background(0);
    Engine.update(engine);
    boxl1.display();
    boxl2.display();
    boxl3.display();
    boxl4.display();
    boxl5.display();
    boxl6.display();

    boxg1.display();
    boxg2.display();
    boxg3.display();
    boxg4.display();
    boxg5.display();
    boxg6.display();
    boxg7.display();

    ball1.display();
    ball2.display();
    ball3.display();

    ground.display();

    hit.display();
    
}










