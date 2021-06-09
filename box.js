class Box{

constructor(x,y,w,h){

var options={
    fricition:0,
    restitution:0.5
}
this.body= Bodies.rectangle(x,y,w,h,optoins)
World.add(world,this.body)
this.width=w
this.height=h
}

display(){

push()
translate(this.body.postition.x,this.body.postition.y)
rotate(this.body.angle)
rectMode(CENTER)
rect(0,0,this.width,this.height)
pop()


}
}