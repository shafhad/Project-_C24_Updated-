class paper {
    constructor(x,y,radius){
        var options = {

         
            restiution:0.3,
            friction:0.5,
           density:1.2
        }
        
        this.radius=radius;
        this.x=x;
        this.y=y;

        this.body = Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.x=x;
        this.y=y;
        
        World.add(world,this.body);
     }
        display() {
            var pos = this.body.position;
            ellipseMode(CENTER);
            fill("pink");
            
            ellipse(pos.x,pos.y,this.radius,this.radius);
        }
}