class Drop{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution: 0.01,
            friction:0.01,
            density:1

        }

        this.rain= Bodies.circle(x,y,4,options)
        this.radius=4;

        World.add(world,this.rain)

    }

    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }

    display(){
        var pos= this.rain.position
        fill("blue")
        stroke("blue")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}