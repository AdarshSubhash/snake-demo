class Snake{
    constructor(x, y) {
        var options = {
       'friction':1.0,
       'density':1.0,
        }
        
        this.length=0;
        this.snake=[];
        this.xmove=0;
        this.ymove=0;
        this.body = Bodies.rectangle(x, y, 10, 10, options);
        this.width = 10;
        this.height = 10;
       this.x=250;
       this.y=250;
        World.add(world, this.body);
      }
      move(){
          if(this.length==this.snake.length){
for(var i=0;i<this.snake.length-1;i++){
    this.snake[i]=this.snake[i+1]
}
}     
}       
eat(x,y){
if(dist(this.x,this.y,x/2,y/2)<1){
this.length++;
}
}
      display(){
        fill("black")
        push();
       translate(this.body.position.x, this.body.position.y);
       for(var i=0;i<this.snake.length;i++){
rect(this.body.position.x, this.body.position.y,this.width,this.height*2);
       }
        pop();
      }
}