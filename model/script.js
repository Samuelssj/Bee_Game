var canvas = document.getElementById("canvas").getContext("2d");
var backgroud = new Obj(0,0,500,900, "src/bg.png")
var bee = new Bee(200,500,100,100, "src/bee1.png")
var spider = new Spider(100,100,100,100, "src/spider1.png")

 

function draw(){
    backgroud.draw();
    bee.draw();
    spider.draw();


}

function update(){
    
    bee.move();
    spider.move();


}

function Main(){
canvas.clearRect(0,0,500,900);
update();
draw();
}

setInterval(Main,10) 