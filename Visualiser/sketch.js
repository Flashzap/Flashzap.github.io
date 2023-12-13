let song;
let img;
let fft;
let particles = [];
let amp;
let isVisualizerActive = false;

function preload() {
  songFour = loadSound('TIPTOE.mp3');
  songOne = loadSound('Money Trees.mp3');
  songTwo = loadSound('United in Grief.mp3');
  songThree = loadSound('Silent Hill.mp3');
  img = loadImage('bg.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  imageMode(CENTER);
  rectMode(CENTER);
  fft = new p5.FFT(0.3);

  img.filter(BLUR, 12);

  noLoop();
}

function draw() {
  if (isVisualizerActive) {
    drawVisualizer();
  }
  else {
    drawMainMenu();
  }
}

function drawVisualizer() {
  translate(width / 2, height / 2);

  fft.analyze();
  amp = fft.getEnergy(20, 200);

  push();
  if (amp > 230) {
    rotate(random(-0.5, 0.5));
  }

  image(img, 0, 0, width + 100, height + 100);
  pop();

  let alpha = map(amp, 0, 255, 100, 150);
  fill(0, alpha);
  noStroke();
  rect(0, 0, width, height);

  stroke(255);
  strokeWeight(3);
  noFill();

  let wave = fft.waveform();

  for(let t = -1; t<= 1; t+=2) {
    beginShape();
    for(let i = 0; i <= 180; i += 0.5) {
      let index = floor(map(i, 0, 180, 0, wave.length - 1));

      let r = map(wave[index], -1, 1, 150, 350);

      let x = r * sin(i) * t;
      let y = r * cos(i);
      vertex(x, y);
    }
    endShape();
  }
  
  let p = new Particle();
  particles.push(p);

  for (let i = particles.length - 1; i >= 0; i--) {
    if (!particles[i].edges()) {
      particles[i].update(amp > 230);
      particles[i].show();
    }
    else {
      particles.splice(i, 1);
    }
  }
}

function drawMainMenu() {
  background(0);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Pick a Song", width / 2, height / 4);

  // Display menu options
  textSize(24);
  text("1. Money Trees (kendrick Lamar)", width / 2, height / 2 - 150);
  text("2. United in Grief (kendrick Lamar)", width / 2, height / 2 - 90);
  text("3. TipToe (Tyler the Creator)", width / 2, height / 2 - 30);
  text("4. Silent Hill (kendrick Lamar)", width / 2, height / 2 + 30);
  text("5. Count me out (kendrick Lamar)", width / 2, height / 2 + 90);


  // Check for mouse clicks to navigate
  if (mouseIsPressed) {
    if (mouseY > height / 2 - 50 && mouseY < height / 2 - 10) {
      // Play Song
      isVisualizerActive = false;
      if (song.isPlaying()) {
        song.pause();
        noLoop();
      }
      else {
        song.play();
        loop();
      }
    } 
    else if (mouseY > height / 2 + 10 && mouseY < height / 2 + 50) {
      // Visualizer
      isVisualizerActive = true;
    }
  }
}

class Particle {
  constructor() {
    this.pos = p5.Vector.random2D().mult(250);
    this.vel = createVector(0, 0);
    this.acc = this.pos.copy().mult(random(0.0001, 0.00001));

    this.w = random(3,5);

    this.color = [random(200, 255), random(200, 255), random(200, 255)];
  }
  update(cond) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    if (cond) {
      this.pos.add(this.vel);
      this.pos.add(this.vel);
      this.pos.add(this.vel);
    }
  }
  edges() {
    if (this.pos.x < -width / 2 || this.pos.x > width / 2 ||
    this.pos.y < -height / 2 || this.pos.y > height / 2){
      return true;
    }
    else {
      return false;
    }
  }
  show() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.w);
  }
}
