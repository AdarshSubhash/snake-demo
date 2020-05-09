class Food{
    constructor(x, y, width, height) {
        var options = {
          isStatic:true
        }
        this.body = Bodies.rectangle(x, y, 10, 10, options);
        this.width = 10;
        this.height = 10;
       // this.x=random(20,480);
        //this.y=random(20,480);
        World.add(world, this.body);
      }
      display(){
        fill("green")
        push();
      // translate(this.body.position.x, this.body.position.y);
      rect(this.body.position.x, this.body.position.y,this.width,this.height);
        pop();
      }
}