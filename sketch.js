var gamestate= "onSling"
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score=0

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var chance=0
function preload() {
   backgroundImg = loadImage("sprites/bg.png");
    getime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
   //if (backgroundImg){

    
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    pig1.count()
    pig3.count()
    //log6.display();
    slingshot.display(); 
    if(chance==5)   {
        gamestate="end"
        text("Your game has ended",500,200)

        
    }
    fill("green")
    textSize(30)
    text("score:"+score,1000,50)
    /*
}
else{
    textSize(50)
    text("Loading...",300,200)


}*/
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
    gamestate="lanched"
    chance=chance+1
}
function keyPressed(){
    if(keyCode==32&&gamestate!="end"){
     Matter.Body.setPosition(bird.body,{x:200, y:50})
    bird.path=[];
    gamestate="onSling"





    slingshot.attach(bird.body)}
}

 async function  getime() {
     var response= await fetch ("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
     var responseJSON = await response.json();
     var date=responseJSON.datetime
     var hours= date.slice(11,13)
    console.log(hours)
    if(hours>6&&hours<18){
        backgroundImg = loadImage("sprites/bg.png");
    }
    else {
        backgroundImg = loadImage("sprites/bg2.jpg");  
    }
}





