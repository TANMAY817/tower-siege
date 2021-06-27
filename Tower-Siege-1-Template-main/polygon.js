class Polygon{
    constructor(x, y) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y,40,40, options);
        this.width = 40;
        this.height = 40;
        World.add(world, this.body);
        this.image=loadImage("polygon.png")
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
      }
}
