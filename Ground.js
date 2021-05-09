class Ground{
    constructor(){
        var option={
            isStatic=true,
            friction=0.4
        }
        this.body=this.bodies(500,625,1200,20,options);
        World(world,this.body);

    }
    display(){
        rectMode(CENTER);
        fill("brown");
        rect(500,625,1200,20);

    }
}