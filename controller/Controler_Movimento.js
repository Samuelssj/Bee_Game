document.addEventListener("keydown", function(e){
    if(e.key === "a"){
       bee.dir = -1;
    }
    else if(e.key ==="d"){
        bee.dir = 1;
    }

});

document.addEventListener("keyup", function(e){
    if(e.key ==="a"){
        bee.dir = 0;
     } else if(e.key ==="d"){
        bee.dir = 0;
    }
});