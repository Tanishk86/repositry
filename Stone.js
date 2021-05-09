class Stone{
 constructor(x,y,diameter){
        var  options={
        isStatic:false,
        restitution:0,
        density:1.2,
        friction:1
    }
     this.body = bodies.circle(x,y,diameter,options);
     this.diameter=diameter;
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