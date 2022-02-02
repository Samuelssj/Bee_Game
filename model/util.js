
class Obj{
    frame =1;
    timer =0;

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

    animation(name, limit){

        this.timer +=1;
        if(this.timer >8){
            this.timer = 0;
            this.frame +=1
        }
        if (this.frame > limit){
            this.frame = 1;
        }
        this.color = "src/"+ name + this.frame + ".png" 

    }

}

class Bee extends Obj{
    dir = 0;
    lifes = 3;
    pts = 0;
    move(){
        this.x += this.dir;
    }

    colisão(obj){
         if(this.x < obj.x + obj.width && 
            this.x + this.width> obj.x &&
            this.y < obj.y + obj.heigth && 
            this.y + this.heigth > obj.y
            ){
             return true;       
        }else{
            return false;
        }

    }

}

class Spider extends Obj{
   
    move(){
    this.y +=3;
    if(this.y > 900){
        this.y = -50;
        this.x = Math.random() * (400-0);
    }

    }

    respaw(){
        this.y = -200;
        this.x = Math.random() * (400-0);
    }

   
}

class Fundo extends Obj{
    move(speed , limite, inicio){
        this.y += speed
        if(this.y > limite){
            this.y = inicio;
        }
    }


} 

class Flower extends Spider{

    respaw(){
        this.y = -200;
        this.x = Math.random() * (400-0);
    }

}

class Texto{
    draw(texto, x,y, color){
        canvas.font = "40px Arial";
        canvas.fillStyle = color
        canvas.fillText(texto,x, y);
    }

}