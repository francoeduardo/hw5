var x1 = [];
var y1 = [];
var d1 = [];

var x2 = [];
var y2 = [];
var d2 = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}
  
function draw() {
  background(255);
  noStroke();

  // draw two ellipses
  fill(120, 60, 100);
//  ellipse(x1, y1, d1);
  for (var i=0; i<100; i=i+1){
    ellipse(x1[i],y1[i],d1[i]);
            }
  
  
  fill(240, 60, 100);
 // ellipse(x2, y2, d2);
  for (var i=0; i<100; i=i+1){
    ellipse(x2[i],y2[i],d2[i]);
  }
  
  
  // 1% of the time
  if (random() < 0.01) {
    // random diameter between 10 and 400
    d1 = random(10, 400);
  }
  
  // 2% of the time…
  if (random() < 0.02) {
    // random diameter between 10 and 400
    d2 = random(10, 400);
  }
}
