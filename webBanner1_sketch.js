var x, y;
var t;

var c;
var i= 0;

var r = 0.0;
var inc=0.0;

var s = 0.0;
var sizeInc = 0.3;

var wX = 0.0;
var wY = 0.0;
var wobbleInc = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function moveText() {

  r = sin(TWO_PI * inc);
  s = sin(TWO_PI * sizeInc);
  wX = cos(TWO_PI * (wobbleInc * 1.1)) * 4;
  wY = sin(TWO_PI * (wobbleInc * 1.05)) * 5;

  if (inc >= TWO_PI)
  {
    inc = 0.0;
  } else {
    inc += 0.001;
  }

  if (sizeInc >= TWO_PI)
  {
    sizeInc = 0.0;
  } else {
    sizeInc += 0.0008;
  }

  if ( wobbleInc >= TWO_PI) {
    wobbleInc = 0.0;
  } else {
    wobbleInc += 0.005;
  }

}

function draw() {

  c = color(sin(i) * 127 + 127, sin(i * 1.1) * 127 + 127, sin(i*1.3) * 127 + 127, 180);

  textSize(50*(s+1));
  textAlign(CENTER);
  push();
  translate(width/2 + wX, height/2 + wY);
  rotate(TWO_PI * r);

  smooth();
  fill(c);
  text("WEBART-a class", 0, 0);
  pop();

  moveText();

  if ( i > TWO_PI) {
    i = 0.0;
  } else {
    i += 0.005;
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
