const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pedra, borracha, martelo, ferro;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    ferro = new Ferro(300,350);
    pedra = new Pedra(700,320,100,100);
  
    borracha=new Borracha(900,450,70);
    martelo = new Martelo(10,100);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    pedra.display();
    plane.display();
   
    borracha.display();
    ferro.display()  
    martelo.display();

 
}
