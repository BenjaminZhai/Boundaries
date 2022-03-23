// Canvas
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 600;

// Global Variables
let x = 200
let x2 = 400

window.addEventListener("load", draw);

function draw() {

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.fillStyle = "red";
    ctx.fillRect(x, 300, 150, 100);

    ctx.fillStyle = "blue";
    ctx.fillRect(x2, 450, 150, 100);

    x++
    if (x >= cnv.width){
        x = -150
    }

    x2++ 
    if (x2 >= cnv.width - 150){
        x2 = cnv.width -150
    }

  // Tell draw to run again at 60FPS
  requestAnimationFrame(draw);
}