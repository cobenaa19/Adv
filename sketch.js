var bubbles = []
var j = 0
var bird;
var pipes = [];
var x = 0
speed = 2

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
  //noCursor();
  for (var i = 0; i < 30; i = i + 1) {
    bubbles[i] = new Bubble(random(600), random(0,200));
  }
  //buttonReset = createButton("Reset");
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = 4;
    this.col = color(255);
  }
  display() {
    noStroke();
    fill(this.col)
    ellipse(this.x, this.y, this.r * 2);
  }
}
  function draw() {
    background(0, 24, 72);
    for (var i = 0; i < bubbles.length; i = i + 1) {
    bubbles[i].display()
    }
    noStroke();
    fill(0)
    rect(50, 450, 30, 200);
    rect(150, 450, 30, 200)
    rect(250, 450, 30, 200)
    rect(350, 450, 30, 200)
    fill(255,255,0,150);
    rect(55,455,2,2)
    rect(70,455,2,2)
    rect(155,455,2,2)
    rect(170,455,2,2)
    rect(255,455,2,2)
    rect(270,455,2,2)
    rect(355,455,2,2)
    rect(370,455,2,2)
    rect(55,465,2,2)
    rect(70,465,2,2)
    rect(155,465,2,2)
    rect(170,465,2,2)
    rect(255,465,2,2)
    rect(270,465,2,2)
    rect(355,465,2,2)
    rect(370,465,2,2)
    rect(55,475,2,2)
    rect(70,475,2,2)
    rect(155,475,2,2)
    rect(170,475,2,2)
    rect(255,475,2,2)
    rect(270,475,2,2)
    rect(355,475,2,2)
    rect(370,475,2,2)
    rect(55,485,2,2)
    rect(70,485,2,2)
    rect(155,485,2,2)
    rect(170,485,2,2)
    rect(255,485,2,2)
    rect(270,485,2,2)
    rect(355,485,2,2)
    rect(370,485,2,2)
  	rect(55,495,2,2)
    rect(70,495,2,2)
    rect(155,495,2,2)
    rect(170,495,2,2)
    rect(255,495,2,2)
    rect(270,495,2,2)
    rect(355,495,2,2)
    rect(370,495,2,2)
    rect(55,505,2,2)
    rect(70,505,2,2)
    rect(155,505,2,2)
    rect(170,505,2,2)
    rect(255,505,2,2)
    rect(270,505,2,2)
    rect(355,505,2,2)
    rect(370,505,2,2)
    rect(55,515,2,2)
    rect(70,515,2,2)
    rect(155,515,2,2)
    rect(170,515,2,2)
    rect(255,515,2,2)
    rect(270,515,2,2)
    rect(355,515,2,2)
    rect(370,515,2,2)
    rect(55,525,2,2)
    rect(70,525,2,2)
    rect(155,525,2,2)
    rect(170,525,2,2)
    rect(255,525,2,2)
    rect(270,525,2,2)
    rect(355,525,2,2)
    rect(370,525,2,2)
    rect(55,535,2,2)
    rect(70,535,2,2)
    rect(155,535,2,2)
    rect(170,535,2,2)
    rect(255,535,2,2)
    rect(270,535,2,2)
    rect(355,535,2,2)
    rect(370,535,2,2)
    //triangle(-50,590,50,350,150,590);
    //triangle(50,590,150,350,250,590)
    //triangle(150,590,250,350,350,590)
    //triangle(250,590,350,350,450,590)

    for (var i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();

      if (pipes[i].hits(bird)) {
        console.log("L");
        noLoop();
      }


      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);

      }
    }

    bird.update();
    bird.show();
    if (frameCount % 100 == 0) {
      pipes.push(new Pipe());
      x = x + 1
    }

    if (this.y > j) {
      x = x + 1
    }

    fill(255)
    textSize(30)
    stroke(50);
    text(x, 200, 100, 40, 50);
    //cursor(HAND)
    fill(0, 128, 0)
    rect(0,570,50,570)
    rect(50,570,100,570)
    rect(100,570,150,570)
    rect(150,570,200,570)
    rect(200,570,250,570)
    rect(250,570,300,570)
    rect(300,570,350,570)
    rect(350,570,400,570)
    rect(450,570,500,570)
    rect(500,570,550,570)
    rect(550,570,600,570)

    fill(94, 73, 67)
    rect(0, 580, 600, 600)
    //FIX RESET BUTTON
    //buttonReset.mousePressed(redraw);
  }

//function redraw() {
  //remove();
  //redraw();
  //loop();
  //document.location.reload()
//}

  function mouseClicked() {
    bird.up();
    //console.log("SPACE");

  }

  function keyPressed() {
    if (key == ' ') {
      bird.up();
      //console.log("SPACE");
    }
  }

  function Bird() {
    this.y = height / 2;
    this.x = 64;

    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;

    this.show = function() {
      fill(50, 22, 150);
      noStroke();
      //rect(this.x, this.y,50,30);
      //triangle(this.x-20, this.y+15, this.x, this.y,this.x,this.y +30);
      //triangle(this.x+20,this.y-40,this.x+20,this.y+70,this.x+40, this.y+15);
      //arc(this.x+50,this.y+15,50,30,4.6,PI)
      //fill(255);
      //triangle(this.x,this.y+10,this.x,this.y+20,this.x-10,this.y+15);
      ellipse(this.x, this.y, 20, 10)

    }

    this.up = function() {
      this.velocity += this.lift;
    }

    this.update = function() {
      this.velocity += this.gravity;
      this.velocity *= 0.9;
      this.y += this.velocity;

      if (this.y > 565) {
        this.y = 565;
        this.velocity = 0;
      }

      if (this.y < 0) {
        this.y = 0;
        this.velocity = 0;
      }
    }
  }

  function Pipe() {
    this.top = random(100, 400);
    this.bottom = random(height / 2);
    this.x = width;
    this.w = 35;
    this.speed = x;

    this.highlight = false;

    this.hits = function(bird) {
      if (bird.y < this.top || bird.y > this.top + 150) {
        if (bird.x > this.x && bird.x < this.x + this.w) {
          this.highlight = true;
          fill(255)
          textSize(20);
          text("Game", 160, 300, 10);
          text("Over!", 220, 300, 10);
          text("Score:" + x, 180, 340, 10);
          return true;
        }
      }
      this.highlight = false;
      return false;
    }

    this.show = function() {
      stroke(20)
      fill(0, 180, 0);
      if (this.highlight) {
        fill(255, 0, 0);
      }
      rect(this.x, 0, this.w, this.top);
      rect(this.x, this.top + 100, this.w, 600);
      rect(this.x - 5, this.top, 45, 20);
      rect(this.x - 5, this.top + 100, 45, 20);
    }

    this.update = function() {
      this.x -= speed;
    }

    this.offscreen = function() {
      if (this.x < -this.w) {
        return true;
      } else {
        return false;
      }
    }
  }