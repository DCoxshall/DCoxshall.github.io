var ballList = [];
var ballNum = 50;

function setup() {
  var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
  myCanvas.position(0, 0);

  myCanvas.parent("sketchHolder");
  for (let i = 0; i < ballNum; i++) {
    ballList.push(
      new Ball(
        getRandomInt(0, width),
        getRandomInt(0, height),
        getRandomInt(5, 10)
      )
    );
  }
}

function draw() {
  background(70);
  for (let i = 0; i < ballList.length; i++) {
    ballList[i].update();
    ballList[i].show();
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
