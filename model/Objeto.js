
class Obj{
    constructor(x,y,width, heigth, color){
        this.x =x;
        this.y = y;
        this.width = width;
        this.heigth = heigth;
        this.color = color;
    }

    draw(){
         var img = new Image();
         img.src = this.color;
         canvas.drawImage(img,this.x,this.y, this.width, this.heigth);

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
    this.y +=4;
    if(this.y > 900){
        this.y = -50;
        this.x = Math.random() * (400-0);
    }

    }
}