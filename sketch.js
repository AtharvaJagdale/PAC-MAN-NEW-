var scenary



function preload(){
 scenary=loadImage("images/galaxy.jpg")
monster1Img=loadImage("images/monster1.png")
monster2Img=loadImage("images/monster2.png")
monster3Img=loadImage("images/monster3.png")
monster4Img=loadImage("images/monster4.png")
keyImg=loadImage("images/key.png")
trophyImg=loadImage("images/trophy.png")
}

function setup() {
  createCanvas(800,800);
  pacman1=new Player()
  Wall1=new Wall(230,205,200,20)
  Wall2=new Wall(500,205,200,20)
  Wall3=new Wall(450,350,20,100)
  Wall4=new Wall(280,350,20,100)
  Wall5=new Wall(360,390,170,20)
  Wall6=new Wall(230,490,200,20)
  Wall7=new Wall(500,490,200,20)
  Wall8=new Wall(75,330,20,150)
  Wall9=new Wall(115,400,100,20)
  Wall10=new Wall(670,330,20,150)
  Wall11=new Wall(630,400,100,20)
  Wall12=new Wall(160,655,200,20)
  Wall13=new Wall(260,615,20,100)
  Wall14=new Wall(350,565,200,20)
  Wall15=new Wall(450,605,20,100)
  Wall16=new Wall(540,650,200,20)
  Wall17=new Wall(160,70,200,20)
  Wall18=new Wall(260,85,20,50)
  Wall19=new Wall(350,110,200,20)
  Wall20=new Wall(450,95,20,50)
  Wall21=new Wall(540,70,200,20)

  
  wallGroup=new Group()
  wallGroup.add(Wall1.body)
  wallGroup.add(Wall2.body)
  wallGroup.add(Wall3.body)
  wallGroup.add(Wall4.body)
  wallGroup.add(Wall5.body)
  wallGroup.add(Wall6.body)
  wallGroup.add(Wall7.body)
  wallGroup.add(Wall8.body)
  wallGroup.add(Wall9.body)
  wallGroup.add(Wall10.body)
  wallGroup.add(Wall11.body)
  wallGroup.add(Wall12.body)
  wallGroup.add(Wall13.body)
  wallGroup.add(Wall14.body)
  wallGroup.add(Wall15.body)
  wallGroup.add(Wall16.body)
  wallGroup.add(Wall17.body)
  wallGroup.add(Wall18.body)
  wallGroup.add(Wall19.body)
  wallGroup.add(Wall20.body)
  wallGroup.add(Wall21.body)

  
 monsterGroup=new Group()
  monster1=createSprite(105,30,20,20)
  monster1.addImage(monster1Img)
  monster1.scale=0.07
  monster1.velocityX=5;
  monster2=createSprite(560,150,20,20)
  monster2.addImage(monster2Img)
  monster2.scale=0.07
  monster2.velocityX=-5;
  monster3=createSprite(90,620,20,20)
  monster3.addImage(monster3Img)
  monster3.scale=0.07
  monster3.velocityX=5;
  monster4=createSprite(615,620,20,20)
  monster4.addImage(monster4Img)
  monster4.scale=0.07
  monster4.velocityX=-5;
  monster5=createSprite(110,350,20,20)
  monster5.addImage(monster4Img)
  monster5.scale=0.07
  monster5.velocityX=-5;
  monster6=createSprite(630,350,20,20)
  monster6.addImage(monster4Img)
  monster6.scale=0.07
  monster6.velocityX=-5;

  monsterGroup.add(monster1)
  monsterGroup.add(monster2)
  monsterGroup.add(monster3)
  monsterGroup.add(monster4)
  monsterGroup.add(monster5)
  monsterGroup.add(monster6)

  key1=createSprite(485,98,20,20)
  key1.addImage(keyImg)
  key1.scale=0.12
 
  key2=createSprite(170,445,20,20)
  key2.addImage(keyImg)
  key2.scale=0.12

  key3=createSprite(350,80,20,20)
  key3.addImage(keyImg)
  key3.scale=0.12

  key4=createSprite(490,610,20,20)
  key4.addImage(keyImg)
  key4.scale=0.12

  key5=createSprite(740,320,20,20)
  key5.addImage(keyImg)
  key5.scale=0.12

  keyGroup=new Group()
  keyGroup.add(key1)
  keyGroup.add(key2)
  keyGroup.add(key3)
  keyGroup.add(key4)
  keyGroup.add(key5)

  trophy=createSprite(360,345,20,20)
  trophy.addImage(trophyImg)
  trophy.scale=0.3

  edges=createEdgeSprites()

  


}

function draw() {
  background(scenary);  
  drawSprites();
 textSize (20)
 fill ("white")
  text (mouseX+";"+mouseY,100,200)
  if(keyDown("right")){
  pacman1.body.x+=5
  pacman1.body.rotation=0
  }
  if(keyDown("left")){
    pacman1.body.x-=5
    pacman1.body.rotation=-180
    }
  if(keyDown("up")){
      pacman1.body.y-=5
      pacman1.body.rotation=-90
      }
  if(keyDown("down")){
        pacman1.body.y+=5
        pacman1.body.rotation=90
        }
        if(pacman1.body.isTouching(keyGroup)){
          monsterGroup.velocityX=10
          keyGroup.destroyEach()
        }
        pacman1.body.collide(wallGroup)
        pacman1.body.collide(edges)
        monster1.bounceOff(wallGroup)
        monster2.bounceOff(wallGroup)
        monster3.bounceOff(wallGroup)
        monster4.bounceOff(wallGroup)
        monster1.bounceOff(edges)
        monster2.bounceOff(edges)
        monster3.bounceOff(edges)
        monster4.bounceOff(edges)
        monster5.bounceOff(edges)
        monster5.bounceOff(wallGroup)
        monster6.bounceOff(edges)
        monster6.bounceOff(wallGroup)
}
