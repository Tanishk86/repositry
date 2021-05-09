class Mango{
    constructor(x,y,diameter){
        var option={
            isStatic:true,
            restitution:0,
            friction:0.1,
        }
        this.body=Bodies.circle(x,y,diameter,options);
        this.diameter=diameter;
        //add Image here
        World.add(world,this.body);
    }
    display(){
        Push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.diameter);
        Pop();
    }
}