class Pig{
 constructor(x,y,width,height){
 var options = {
'friction' : 0.8,
isStatic:true
} 
this.body = Bodies.rectangle(x,y,width,height,options) 
this.width = width
this.height = height
World.add(world,this.body)


}

display(){
var pos = this.body.position
var angle = this.body.angle
rectMode(CENTER)
fill("green")
rect(this.body.position.x,this.body.position.y,this.width,this.height)
}
}
