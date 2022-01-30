var canvas = document.getElementById("canvas").getContext("2d");
var bee = new Bee(200,500,100,100, "yellow")
var spider = new Spider(100,100,100,100, "black")
 



function draw(){
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