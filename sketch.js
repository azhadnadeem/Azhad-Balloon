var bgdImage;
var bgd;
var a1Image,a2Image,a3Image,a4Image,a5Image,a6Image,a7Image
var a1,a2,a3,a4,a5,a6,a7;
var b1Image,b2Image,b3Image,b4Image,b5Image
var b1,b2,b3,b4,b5;
var c1Image,c2Image,c3Image,c4Image;
var c1,c2,c3,c4;
var d1Image,d2Image;
var d1,d2;
var bowImage;
var bow;
var arrowImage;
var arrow;


function preload(){
 
  bgdImage=loadImage("bb2.jpg")
 //load your images here 
 arrowImage=loadImage("arrow0.png")
 bowImage=loadImage("codearrow.png")
 d1Image=loadImage("pink_balloon0.png")
 d2Image=loadImage("pink_balloon0.png")
 c1Image=loadImage("blue_balloon0.png")
 c2Image=loadImage("blue_balloon0.png") 
  c3Image=loadImage("blue_balloon0.png")
 c4Image=loadImage("blue_balloon0.png")
  b1Image=loadImage("green_balloon0.png")
  b2Image=loadImage("green_balloon0.png")
  b3Image=loadImage("green_balloon0.png")
  b4Image=loadImage("green_balloon0.png")
  b5Image=loadImage("green_balloon0.png")
  a1Image=loadImage("red_balloon0.png")
  a2Image=loadImage("red_balloon0.png")
  a3Image=loadImage("red_balloon0.png")
  a4Image=loadImage("red_balloon0.png")
  a5Image=loadImage("red_balloon0.png")
  a6Image=loadImage("red_balloon0.png")
  a7Image=loadImage("red_balloon0.png")
 
  
}

function setup() {
  createCanvas(500, 360);
   
  
 
   bgd=createSprite(200,200);
  bgd.addImage("bgd",bgdImage);
  bgd.scale=2.5
  
  //add code here
  a1=createSprite(30,340,20,20);
  a2=createSprite(30,290,20,20);
  a3=createSprite(30,240,20,20);
  a4=createSprite(30,190,20,20);
  a5=createSprite(30,140,20,20);
  a6=createSprite(30,90,20,20);
  a7=createSprite(30,40,20,20);
   
  a1.addImage("a1",a1Image);
   a2.addImage("a2",a1Image);
   a3.addImage("a3",a1Image);
   a4.addImage("a4",a1Image);
   a5.addImage("a5",a1Image);
   a6.addImage("a6",a1Image);
   a7.addImage("a7",a1Image);
  
  a1.scale=0.08;
  a2.scale=0.08;
  a3.scale=0.08;
  a4.scale=0.08;
  a5.scale=0.08;
  a6.scale=0.08;
  a7.scale=0.08;
  
  
  b1=createSprite(80,310,20,20);
  b2=createSprite(80,250,20,20);
  b3=createSprite(80,190,20,20);
  b4=createSprite(80,130,20,20);
  b5=createSprite(80,70,20,20);
  
   b1.addImage("b1",b1Image);
   b2.addImage("b2",b2Image);
   b3.addImage("b3",b3Image);
   b4.addImage("b4",b4Image);
   b5.addImage("b5",b5Image);
  
   b1.scale=0.08;
   b2.scale=0.08;
   b3.scale=0.08;
   b4.scale=0.08;
   b5.scale=0.08;
  
  c1=createSprite(130,270,20,20);
  c2=createSprite(130,220,20,20);
  c3=createSprite(130,170,20,20);
  c4=createSprite(130,120,20,20);
  c1.addImage("c1",c1Image);
  c2.addImage("c2",c1Image);
  c3.addImage("c3",c1Image);
  c4.addImage("c4",c1Image);
  
  c1.scale=0.08
   c2.scale=0.08
   c3.scale=0.08
   c4.scale=0.08
  
  d1=createSprite(180,230,20,20);
  d2=createSprite(180,180,20,20);
  d1.addImage("d1",d1Image);
  d2.addImage("d2",d2Image);
  
  d1.scale=1;
  d2.scale=1;
 
  arrow=createSprite(400,190,30,10);
  arrow.addImage("arrow",arrowImage);
  arrow.scale=0.3 ;
  bow=createSprite(420,220,10,30);
  bow.addImage("bow",bowImage);
  arrow.setCollider("rectangle",0,0,250,10);
 // arrow.debug=true;
  
}
 
 
function draw() {
 //add code here
  
  
  if (keyDown("up")){
    bow.velocityY=-4;
    arrow.velocityY=-4;
  }
  if(keyWentUp("up")){
    bow.velocityY=-0;
    arrow.velocityY=-0;
  }
 if (keyDown("down")){
    bow.velocityY=4;
    arrow.velocityY=4;  
  }
 if(keyWentUp("down")){
    bow.velocityY=0
   arrow.velocityY=0;
  }
  if (keyDown("space")){
    arrow.velocityX=-10;
  }
  
bgd.velocityX=-5
  if(bgd.x<180)
    {
      bgd.x=320;
    }
  
 
  
  
  if(arrow.x<0){
    arrow.x=400;
    arrow.velocityX=0;
   
  }
 
  if(arrow.isTouching(a1)){
    
      a1.velocityY=-10;
    arrow.x=400;
    arrow.velocityX=0;
  }
  if(arrow.isTouching(a2)){
      a2.velocityY=-10;
    arrow.x=400;
    arrow.velocityX=0;
  }
    if(arrow.isTouching(a3)){
      a3.velocityY=-10;
      arrow.x=400;
      arrow.velocityX=0;
    }
      if(arrow.isTouching(a4)){
      a4.velocityY=-10;
        arrow.x=400;
        arrow.velocityX=0;
      }
        if(arrow.isTouching(a5)){
      a5.velocityY=-10;
          arrow.x=400;
          arrow.velocityX=0;
        }
          if(arrow.isTouching(a6)){
      a6.velocityY=-10;
            arrow.x=400;
            arrow.velocityX=0;
          }
            if(arrow.isTouching(a7)){
      a7.velocityY=-10;
              arrow.x=400;
              arrow.velocityX=0;
            }
    
    if(arrow.isTouching(b1)){
      b1.velocityY=-10;
      arrow.x=400;
      arrow.velocityX=0;
    }
  if(arrow.isTouching(b2)){
      b2.velocityY=-10;
      arrow.x=400;
    arrow.velocityX=0;
    }
  if(arrow.isTouching(b3)){
      b3.velocityY=-10;
      arrow.x=400;
    arrow.velocityX=0;
    }
  if(arrow.isTouching(b4)){
      b4.velocityY=-10;
      arrow.x=400;
    arrow.velocityX=0;
    }
  if(arrow.isTouching(b5)){
      b5.velocityY=-10;
      arrow.x=400;
    arrow.velocityX=0;
    }
  if(arrow.isTouching(c1)){
      c1.velocityY=-10
      arrow.x=400;
    arrow.velocityX=0;
    }
  
if(arrow.isTouching(c2)){
      c2.velocityY=-10
      arrow.x=400;
  arrow.velocityX=0;
    }
  if(arrow.isTouching(c3)){
      c3.velocityY=-10
      arrow.x=400;
    arrow.velocityX=0;
    }
  if(arrow.isTouching(c4)){
      c4.velocityY=-10
      arrow.x=400;
    arrow.velocityX=0;
    }
  if(arrow.isTouching(d1)){
      d1.velocityY=-10
      arrow.x=400;
    arrow.velocityX=0;
    }
  if(arrow.isTouching(d2)){
      d2.velocityY=-10
      arrow.x=400;
      arrow.velocityX=0;
      
    }

  drawSprites();
  console.log (bow.y)
}



