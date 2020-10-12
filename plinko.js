class Plinko{

    constructor(x,y){
        var options={
            isStatic: true,
            
        }
        this.diameter = 10;
        this.body = Bodies.circle(x,y,this.diameter,options);
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(CENTER);
        ellipse(0, 0, this.diameter, this.diameter);
        pop();
    }
}