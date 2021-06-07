var infectionDistance = 500;
var ballcolor = 90;

class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.maxspeed = 1;

    this.xvel = 0;
    this.yvel = 0;
    while (this.xvel < 0.05 && this.xvel > -0.05) {
      this.xvel = getRandomInt(-this.maxspeed, this.maxspeed);
    }
    while (this.yvel < 0.05 && this.yvel > -0.05) {
      this.yvel = getRandomInt(-this.maxspeed, this.maxspeed);
    }

    this.infCount = 3;
  }

  show() {
    fill(ballcolor);
    stroke(ballcolor);
    if (this.infected == true) {
      fill(255, 0, 0);
      stroke(255, 0, 0);
    }
    ellipse(this.x, this.y, this.radius);
  }

  update() {
    if (!mouseIsPressed) {
      this.x += this.xvel;
      this.y += this.yvel;
    }

    if (this.x < 20) {
      this.xvel++;
    } else if (this.x > width - 20) {
      this.xvel--;
    }

    if (this.y < 20) {
      this.yvel++;
    } else if (this.y > height - 20) {
      this.yvel--;
    }

    for (let i = 0; i < ballList.length; i++) {
      let distance = dist(this.x, this.y, ballList[i].x, ballList[i].y);
      if (distance < infectionDistance) {
        stroke(ballcolor, ballcolor, ballcolor, 255 - distance);
        line(this.x, this.y, ballList[i].x, ballList[i].y);
      }
    }

    if (this.xvel > this.maxspeed) {
      this.xvel = this.maxspeed;
    }
    if (this.yvel > this.maxspeed) {
      this.yvel = this.maxspeed;
    }

    if (this.xvel < -this.maxspeed) {
      this.xvel = -this.maxspeed;
    }
    if (this.yvel < -this.maxspeed) {
      this.yvel = -this.maxspeed;
    }
  }
}
