class Box {
  constructor(x, y, width, height) {
    var options = {
       isStatics:false,
        'restitution':0.3,
        'friction':0,
        'density':1.2,
    }
    this.image=loadImage("paper.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    pop();
  }
};
