class Monster{
    constructor(x,y,radius){
var options = {
    isStatic:false,
    density:1,
    frictionAir: 1
    
}

this.x=x
this.y=y
this.r=radius
this.image=loadImage("Monster1.png")
this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)

World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    push ()
    translate (pos.x, pos.y-100);
    imageMode (CENTER);
    fill("white");
    image(this.image, 0,0, 400, 250);
    }
    }
