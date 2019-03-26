let font,
  fontsize = 40;
var switchcount;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  switchcount = loadStrings("switches.txt");
  font = loadFont('SourceSansPro-Regular.otf');
}

function setup() {
  //createCanvas(710, 400);
  createCanvas(windowWidth,windowHeight);
  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(160);

  // Align the text to the right
  // and run drawWords() in the left third of the canvas
  textAlign(RIGHT);
  drawWords(width * 0.25);

  // Align the text in the center
  // and run drawWords() in the middle of the canvas
  textAlign(CENTER);
  drawWords(width * 0.5);

  // Align the text to the left
  // and run drawWords() in the right third of the canvas
  textAlign(LEFT);
  drawWords(width * 0.75);
}

function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(0, 255, 0);
  text(join(switchcount), x, 80);

  fill(65);
  text('ni', x, 150);

  fill(190);
  text('san', x, 220);

  fill(255);
  text('shi', x, 290);
}