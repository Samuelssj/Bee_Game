
class Obj{
    constructor(x,y,width, heigth, color){
        this.x =x;
        this.y = y;
        this.width = width;
        this.heigth = heigth;
        this.color = color;
    }

    draw(){

        canvas.fillStyle = this.color;
        canvas.fillRect(this.x,this.y,this.width,this.heigth);
    }
}

class Bee extends Obj{
    dir = 0
    move(){
        this.x += this.dir;
    }

}

class Spider extends Obj{
    move(){
    this.y +=2;
    if(this.y > 900){
        this.y = -50;
    }

    }
}