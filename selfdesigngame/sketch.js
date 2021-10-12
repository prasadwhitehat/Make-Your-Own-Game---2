var bg;
var bgimage;
var gun,gunimage;


function preload()
{
 bgimage=loadAnimation("images/bg2.gif");
 gunimage=loadAnimation("images/gun1.png","images/gun2.png","images/gun3.png");


}


function setup()
{
    createCanvas(displayWidth,displayHeight);
    bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
    bg.addAnimation("bgimage1",bgimage);
    gun=createSprite(displayWidth/2,displayHeight/2+145);
    gun.addAnimation("gun",gunimage);
    gun.scale=0.5;
}


function draw()
{
   drawSprites();
    

}