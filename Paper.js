class Paper{
    constructor(x, y, radius){
       var options = {
           isStatic : false,
           restitution:0.3,
           friction:0.5,
           density:1.2
       }
       this.x = x;
       this.y = y;
       this.r = radius;

       this.body = Bodies.circle(this.x,this.y,this.r,options);
    }

    display(){
        push();
        fill("green");
        ellipseMode(LEFT);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        pop();
    }
}