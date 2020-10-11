const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;

var ground;

function setup(){
    
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,100,50,50);
    box2 = new Box(220,50,60,75);
    ground = new Ground(200,350,400,35);
}

function draw(){
    background(225);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
   
}