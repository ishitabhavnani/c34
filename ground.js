class Ground {

    constructor(x , y , w , h){
        var options ={
            isStatic: true
        }
        this.body  = Bodies.rectangle(x , y , w , h , options);
        this.width=w;
        this.height=h;
        World.add(myWorld,this.body)
    }

    display(){
        fill("black")
        rectMode(CENTER);
        rect (this.body.position.x ,this.body.position.y , this.width, this.height )
    }
}