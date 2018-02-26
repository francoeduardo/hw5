var x = 230;
var y = 220;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, x, 20);
  
  for (var y=220; y<800; y=y+3){
    background(0);
    ellipse(230,y,10);
  }
  
  // draw drip
 // ellipse(x, y, 10);
  
  // down 3 pixels each frame, but maybe should be accelerating?
 // y = y + 3
  
  // if invisible for a full “height” amount…
//  if (y > height*2) {
    // reset
//    y = 220;
 // }
}
