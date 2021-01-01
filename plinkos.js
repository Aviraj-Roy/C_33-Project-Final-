class Ball 
{
    constructor(x,y,r)
    {    
      var options ={
            isStatic:true
      }
    this.r=10;
    this.body = Bodies.circle(x,y,this.r/2, options);   
    World.add(world, this.body);
      }
    display()
    {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      angleMode(RADIANS);
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("white");
      strokeWeight(4);
      stroke("blue");
      ellipse(0,0,this.r,this.r);
      pop();
     }
}