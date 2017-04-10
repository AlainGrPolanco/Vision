var back;
var frame;
var framegif;
var bottomball;
var topball;
var twist;
var twistgif;

function preload() {
  back = loadImage("Files/Background.png");
  frame = loadImage("Files/Frame.png");
  twist = loadImage("Files/Top Tile.png");
  framegif = loadGif('Files/Frame.gif');
  bottomball = loadGif('Files/Balls-Bottom.gif');
  topball = loadGif('Files/Balls-Top.gif');
  twistgif = loadGif('Files/Tile.gif');

}

function setup() {
  createCanvas(600, 800);

}

function draw() {
  background(frame);
  image(framegif, 0, 0, 600, 800)
  image(back, 0, 0, 600, 800);
  image(twist, 0, 0, 600, 800);
  if (twistgif.playing()) {
    image(twistgif, 0, 0, 600, 800);
  }
  if (topball.playing()) {
    image(topball, 0, 0, 600, 800);
  }
  if (bottomball.playing()) {
    image(bottomball, 0, 0, 600, 800);
  }


}


function mousePressed() {
  if (twistgif.playing()) {
    twistgif.pause();
  } else {
    twistgif.play();
  }
  if (topball.playing()) {
    topball.pause();
  } else {
    topball.play();
  }
  if (bottomball.playing()) {
    bottomball.pause();
  } else {
    bottomball.play();
  }
}
