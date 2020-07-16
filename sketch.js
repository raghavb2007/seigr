const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var background,platform;
var bird, slingshot;
var score=0


function preload() {
    
}

function setup(){
    score=0
    
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(1200,200,500,20);
    ground2=new Ground (600,400,500,20)
    

    box7 = new Box(600,350,40,50);
    box8 = new Box(550,350,40,50);
    box9 = new Box(650,350,40,50);
    box10 = new Box(575,300,40,50);
    
    box11 = new Box(625,300,40,50);
    box12 = new Box(600,250,40,50);


    box1 = new Box(1150,90,40,50);
    box2 = new Box(1050,90,40,50);
    box3 = new Box(1100,90,40,50);
    box4 = new Box(1075,50,40,50);
    
    box5 = new Box(1125,50,40,50);
    box6 = new Box(1100,10,40,50);

    bird = new Bird(100,90,400,50);
    
   

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(150,150,150);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    ground2.display();

    box3.display();
    box4.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    
    



    //log6.display();
    slingshot.display();  
    bird.display();  
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}