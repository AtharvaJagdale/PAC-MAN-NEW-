class Player {

constructor()
{

    this.body=createSprite(350,620,100,100)
    this.Image=loadAnimation("images/Pacman1.png","images/pacman2.png")
    this.body.addAnimation("Pacman",this.Image)
    this.body.scale=0.2
    this.body.setCollider("circle",5,0,100)
}

}