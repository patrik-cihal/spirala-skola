// TIME COMPLEXITY: O(min(WIDTH, HEIGHT)/OFFS)

let WIDTH = 500;
let HEIGHT = 500;

let BACKGROUND_COLOR = 240;
let STROKE_COLOR = [100, 150, 120];
let STROKE_WEIGHT = 4;
let x = 0;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  stroke(STROKE_COLOR)
  strokeWeight(STROKE_WEIGHT)
}

function draw() {
  background(BACKGROUND_COLOR)
  translate(WIDTH/2, HEIGHT/2);
  let offs = abs(10*sin(x))+5
  x += 0.05;
  spiral(min(WIDTH/2, HEIGHT/2), offs)
}

function spiral(radius, offs) {
  if(radius <= 0) {
    return;
  }
  line(-radius-offs, -radius, radius, -radius);
  line(radius, -radius, radius, radius-offs);
  rotate(PI);
  spiral(radius-offs, offs)
}