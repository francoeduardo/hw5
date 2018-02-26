var x = [];
var y = [];
var r = [];

function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  for (var i=0; i<100; i=i+1);
  	rect(195, height, 30, -100);
}
  
  // darker as it gets closer to 0
  push();
  fill(y);
  translate(x, y);
  rotate(r);
  rect(-10, -10, 20, 20);
  pop();
  
  // up 3 pixels
  y -= 3;
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 0.05
  
  // if reach past the top a bunch
  if (y < -150) {
    y = 290;
  }
}
