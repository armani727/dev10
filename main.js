// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let heliImg = document.createElement("img");
heliImg.src = "img/heliBlueTransparent.png";

let state = "start";
let mouseispressed = false;
let heli = {
  x: 200,
  y: 250,
  w: 80,
  h: 40,
  speed: 0,
  accel: 0.7,
};

// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "gameon") {
    rungame();
  } else if (state === "gameover") {
    drawGameOver();
  }

  // Request Animation Frame
  requestAnimationFrame(draw);
}

// event stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseuphander);

function mousedownHandler() {
  mouseispressed = true;

  // start game on mousedown
  if (state === "start") {
    state = "gameon";
  }
}

function mouseuphander() {
  mouseispressed = false;
}
