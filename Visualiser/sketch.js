let songOne;
let songTwo;
let songThree;
let songFour;
let songFive;
let songSix;
let songSev;
let songEte;
let songNine;
let img;
let a;
let b;
let c;
let t;
let s;
let k;
let e;
let f;
let fft;
let particles = [];
let amp;
let isVisualizerActive = false;
let currentBackground;

function preload() {
  songFour = loadSound('TIPTOE.mp3');
  songOne = loadSound('Money Trees.mp3');
  songTwo = loadSound('United In Grief.mp3');
  songThree = loadSound('Silent Hill.mp3');
  songFive = loadSound('Count Me Out.mp3');
  songSix = loadSound('SICKO MODE.mp3');
  songSev = loadSound('Family ties.mp3');
  songEte = loadSound('Godzilla.mp3');
  songNine = loadSound('Flashing Lights.mp3');
  img = loadImage('GKMC.jpg');
  a = loadImage('MrMoraleA.jpg');
  b = loadImage('MrMoraleB.jpg');
  c = loadImage('MrMorale C.jpg');
  t = loadImage('TipToe.jpg');
  s = loadImage('ASTRO.JPG');
  k = loadImage('Family.jpg');
  e = loadImage('MTBMB.jpg');
  f = loadImage('GRAD.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  imageMode(CENTER);
  rectMode(CENTER);
  fft = new p5.FFT(0.3);

  img.filter(BLUR, 3);
  a.filter(BLUR, 3);
  b.filter(BLUR, 3);
  c.filter(BLUR, 3);
  t.filter(BLUR, 3);

}

function draw() {
  if (isVisualizerActive === true) {
    drawVisualizer();
  }
  else {
    drawMainMenu();
  }
}

function drawVisualizer() {
  background(0); 
  
  translate(width / 2, height / 2); 

  fft.analyze();
  amp = fft.getEnergy(20, 200);

  push();
  if (amp > 230) {
    rotate(random(-0.5, 0.5));
  }

  image(currentBackground, 0, 0, width + 100, height + 100);
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

function drawMainMenu() {
  background(0);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Song List", width / 2, height / 30);

  // Display menu options
  textSize(24);
  text("1. Money Trees (Kendrick Lamar)", width / 2, height / 2 - 360);
  text("2. United in Grief (Kendrick Lamar)", width / 2, height / 2 - 255);
  text("3. TipToe (Tyler the Creator)", width / 2, height / 2 - 170);
  text("4. Silent Hill (Kendrick Lamar)", width / 2, height / 2 - 85);
  text("5. Count me out (Kendrick Lamar)", width / 2, height / 2 + 0);
  text("6. SICKO MODE (Travis Scott)", width / 2, height / 2 + 85);
  text("7. Family ties (kendrick Lamar & Baby Keem)", width / 2, height / 2 + 170);
  text("8. Godzilla (Eminem ft. juice WRLD)", width / 2, height / 2 + 255);
  text("9. Flashing Lights (Kanye West)", width / 2, height / 2 + 360);

}
// Check for mouse clicks to navigate
function keyTyped() {

  if (key === '1') {
    songOne.play();
    isVisualizerActive = true;
    currentBackground = img;
    songTwo.pause();
    songThree.pause();
    songFour.pause();
    songFive.pause();
    songSix.pause();
    songSev.pause();
    songEte.pause();
    songNine.pause();
  }
  else if (key === '2') {
    songTwo.play();
    isVisualizerActive = true;
    currentBackground = a;
    songOne.pause();
    songThree.pause();
    songFour.pause();
    songFive.pause();
    songSix.pause();
    songSev.pause();
    songEte.pause();
    songNine.pause();
  }
  else if (key === '3') {
    songThree.play();
    isVisualizerActive = true;
    currentBackground = b;
    songOne.pause();
    songTwo.pause();
    songFour.pause();
    songFive.pause();
    songSix.pause();
    songSev.pause();
    songEte.pause();
    songNine.pause();
  }
  else if (key === '4') {
    songFour.play();
    isVisualizerActive = true;
    currentBackground = t;
    songOne.pause();
    songTwo.pause();
    songThree.pause();
    songFive.pause();
    songSix.pause();
    songSev.pause();
    songEte.pause();
    songNine.pause();
  }
  else if (key === '5') {
    songFive.play();
    isVisualizerActive = true;
    currentBackground = c;
    songOne.pause();
    songTwo.pause();
    songThree.pause();
    songFour.pause();
    songSix.pause();
    songSev.pause();
    songEte.pause();
    songNine.pause();
  }
  else if (key === '6') {
    songSix.play();
    isVisualizerActive = true;
    currentBackground = s;
    songOne.pause();
    songTwo.pause();
    songThree.pause();
    songFour.pause();
    songFive.pause();
    songSev.pause();
    songEte.pause();
    songNine.pause();
  }
  else if (key === '7') {
    songSev.play();
    isVisualizerActive = true;
    currentBackground = k;
    songOne.pause();
    songTwo.pause();
    songThree.pause();
    songFour.pause();
    songFive.pause();
    songSix.pause();
    songEte.pause();
    songNine.pause();
  }
  else if (key === '8') {
    songEte.play();
    isVisualizerActive = true;
    currentBackground = e;
    songOne.pause();
    songTwo.pause();
    songThree.pause();
    songFour.pause();
    songFive.pause();
    songSix.pause();
    songSev.pause();
    songNine.pause();
  }
  else if (key === '9') {
    songNine.play();
    isVisualizerActive = true;
    currentBackground = f;
    songOne.pause();
    songTwo.pause();
    songThree.pause();
    songFour.pause();
    songFive.pause();
    songSix.pause();
    songSev.pause();
    songEte.pause();
  }
  else if (key === ' ') {   
    songOne.pause();
    songTwo.pause();
    songThree.pause();
    songFour.pause();
    songFive.pause();
    songSix.pause();
    songSev.pause();
    songEte.pause();
    songNine.pause();
    isVisualizerActive = false;
  }

}
