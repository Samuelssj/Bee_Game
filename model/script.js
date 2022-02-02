var canvas = document.getElementById("canvas").getContext("2d");

var fundo = new Fundo(0,0,500,900, "src/bg.png")
var flower = new Flower(0,0,50,50,"src/flower1.png")
var fundo2 = new Fundo(0,-900,500,900, "src/bg.png")
var bee = new Bee(200,550,100,100, "src/bee1.png")
var spider = new Spider(100,100,100,100, "src/spider1.png")

var texto_points = new Texto();
var texto_vidas = new Texto();
var fim_jogo = new Texto();

var play = true;
 

function draw(){

    fundo.draw();
    fundo2.draw();
    if(play){
        bee.draw();
        spider.draw();
        flower.draw();  
        texto_vidas.draw("Vidas: "+ bee.lifes, 30,130, "blue");
        texto_points.draw("Pontos: "+ bee.pts, 300,130, "reds");
    }else{
        fim_jogo.draw("GAME OVER", 140, 450, "brown")

    }
        
        
}

function collides(){
    if(bee.colisão(spider)){
        spider.respaw();
        bee.lifes -=1;

    }

    if(bee.colisão(flower)){
        flower.respaw();
        bee.pts +=1;

    }

    
}


function gameover(){
    if(bee.lifes <=0){
        play = false;
    }

}

function update(){
    fundo.move(3,900,0);
    fundo2.move(3,0,-900);
    if(play){
    bee.move();
    bee.animation("bee", 4);
    spider.move();
    spider.animation("spider", 4);
    flower.move();
    flower.animation("flower", 2);
    collides();
    gameover();
    }


}

function Main(){
canvas.clearRect(0,0,500,900);
update();
draw();
}

setInterval(Main,10) 