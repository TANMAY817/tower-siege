class Launcher{

constructor(bodyA,pointB){

    var options={
        bodyA:bodyA,
        pointB:pointB,
        length:1,
        stiffness:0.2
    }
    this.pointB=pointB
    this.bodyA=bodyA
    this.body=Matter.Constraint.create(options)
    World.add(world,this.body);

    
}
display(){
    strokeWeight(3)

    if(this.body.bodyA){


    
    line (this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}

fly(){

    this.body.bodyA=null;
}

attach(bodyB){
this.body.bodyA=bodyB

}

}