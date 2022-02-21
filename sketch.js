var starImg,bgImg;
var star, starBody;
var fada, fadavoando;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fadavoando = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
}

function setup() {
    createCanvas(800, 750);
    fada = createSprite (400, 700);
    fada.addAnimation("voando",fadavoando);
    fada.scale = 0.3
    

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	

}
function draw(){
    background("black")
    drawSprites();
    Engine.update(engine);
    star.x = starBody.position.x
    star.y = starBody.position.y
    if (keyCode == RIGHT_ARROW)
    fada.velocityX = 5
    if (keyCode == LEFT_ARROW)
    fada.velocityX = -5

    if(keyCode == DOWN_ARROW ){
        Matter.Body.setStatic(starBody,false)
    }
   
}
