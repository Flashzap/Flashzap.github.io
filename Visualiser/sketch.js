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
let MT;
let UG;
let SH;
let TT;
let CMO;
let SM;
let FT;
let GOD;
let AOTL;

function preload() {
  songFour = loadSound('TIPTOE.mp3');
  songOne = loadSound('Money Trees.mp3');
  songTwo = loadSound('United In Grief.mp3');
  songThree = loadSound('Silent Hill.mp3');
  songFive = loadSound('Count Me Out.mp3');
  songSix = loadSound('SICKO MODE.mp3');
  songSev = loadSound('Family ties.mp3');
  songEte = loadSound('Godzilla.mp3');
  songNine = loadSound('Lights.mp3');
  img = loadImage('GKMC.jpg');
  a = loadImage('MrMoraleA.jpg');
  b = loadImage('MrMoraleB.jpg');
  c = loadImage('MrMorale C.jpg');
  t = loadImage('TipToe.jpg');
  s = loadImage('ASTRO.JPG');
  k = loadImage('Family.jpg');
  e = loadImage('MTBMB.jpg');
  f = loadImage('Fantasy.jpg');
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
  s.filter(BLUR, 3);
  k.filter(BLUR, 3);
  e.filter(BLUR, 3);
  f.filter(BLUR, 3);

  MT = createButton('Money Trees (Kendrick Lamar)');
  MT.position(20, 100);
  MT.mousePressed(() => {
    songOne.play();
    isVisualizerActive = true;
    currentBackground = img;
    songTwo.stop();
    songThree.stop();
    songFour.stop();
    songFive.stop();
    songSix.stop();
    songSev.stop();
    songEte.stop();
    MT.hide();
    UG.hide();
    SH.hide();
    TT.hide();
    CMO.hide();
    SM.hide();
    FT.hide();
    GOD.hide();
    AOTL.hide();
  });

  UG = createButton('United in Grief (Kendrick Lamar');
  UG.position(20, 200);
  UG.mousePressed(() => {
    songTwo.play();
    isVisualizerActive = true;
    currentBackground = a;
    songOne.stop();
    songThree.stop();
    songFour.stop();
    songFive.stop();
    songSix.stop();
    songSev.stop();
    songEte.stop();
    songNine.stop();
    MT.hide();
    UG.hide();
    SH.hide();
    TT.hide();
    CMO.hide();
    SM.hide();
    FT.hide();
    GOD.hide();
    AOTL.hide();
  });

  SH = createButton('Silent Hill (Kendrick Lamar)');
  SH.position(20, 300);
  SH.mousePressed(() => {
    songThree.play();
    isVisualizerActive = true;
    currentBackground = b;
    songOne.stop();
    songTwo.stop();
    songFour.stop();
    songFive.stop();
    songSix.stop();
    songSev.stop();
    songEte.stop();
    songNine.stop();
    MT.hide();
    UG.hide();
    SH.hide();
    TT.hide();
    CMO.hide();
    SM.hide();
    FT.hide();
    GOD.hide();
    AOTL.hide();
  });

  TT = createButton('TipToe (Tyler the Creator)');
  TT.position(20, 400);
  TT.mousePressed(() => {
    songFour.play();
    isVisualizerActive = true;
    currentBackground = t;
    songOne.stop();
    songTwo.stop();
    songThree.stop();
    songFive.stop();
    songSix.stop();
    songSev.stop();
    songEte.stop();
    songNine.stop();
    MT.hide();
    UG.hide();
    SH.hide();
    TT.hide();
    CMO.hide();
    SM.hide();
    FT.hide();
    GOD.hide();
    AOTL.hide();
  });

  CMO = createButton('Count me out (Kendrick Lamar)');
  CMO.position(20, 500);
  CMO.mousePressed(() => {
    songFive.play();
    isVisualizerActive = true;
    currentBackground = c;
    songOne.stop();
    songTwo.stop();
    songThree.stop();
    songFour.stop();
    songSix.stop();
    songSev.stop();
    songEte.stop();
    songNine.stop();
    MT.hide();
    UG.hide();
    SH.hide();
    TT.hide();
    CMO.hide();
    SM.hide();
    FT.hide();
    GOD.hide();
    AOTL.hide();
  });

  SM = createButton('SICKO MODE (Travis Scott)');
  SM.position(20, 600);
  SM.mousePressed(() => {
    songSix.play();
    isVisualizerActive = true;
    currentBackground = s;
    songOne.stop();
    songTwo.stop();
    songThree.stop();
    songFour.stop();
    songFive.stop();
    songSev.stop();
    songEte.stop();
    songNine.stop();
    MT.hide();
    UG.hide();
    SH.hide();
    TT.hide();
    CMO.hide();
    SM.hide();
    FT.hide();
    GOD.hide();
    AOTL.hide();
  });

  FT = createButton('Family ties (Kendrick Lamar & Baby Keem)');
  FT.position(20, 700);
  FT.mousePressed(() => {
    songSev.play();
    isVisualizerActive = true;
    currentBackground = k;
    songOne.stop();
    songTwo.stop();
    songThree.stop();
    songFour.stop();
    songFive.stop();
    songSix.stop();
    songEte.stop();
    songNine.stop();
    MT.hide();
    UG.hide();
    SH.hide();
    TT.hide();
    CMO.hide();
    SM.hide();
    FT.hide();
    GOD.hide();
    AOTL.hide();
  });

  GOD = createButton('Godzilla (Eminem ft. juice WRLD)');
  GOD.position(20, 800);
  GOD.mousePressed(() => {
    songEte.play();
    isVisualizerActive = true;
    currentBackground = e;
    songOne.stop();
    songTwo.stop();
    songThree.stop();
    songFour.stop();
    songFive.stop();
    songSix.stop();
    songSev.stop();
    songNine.stop();
    MT.hide();
    UG.hide();
    SH.hide();
    TT.hide();
    CMO.hide();
    SM.hide();
    FT.hide();
    GOD.hide();
    AOTL.hide();
  });

  AOTL = createButton('All of the Lights (Kanye West)');
  AOTL.position(20, 900);
  AOTL.mousePressed(() => {
    songNine.play();
    isVisualizerActive = true;
    currentBackground = f;
    songOne.stop();
    songTwo.stop();
    songThree.stop();
    songFour.stop();
    songFive.stop();
    songSix.stop();
    songSev.stop();
    songEte.stop();
    MT.hide();
    UG.hide();
    SH.hide();
    TT.hide();
    CMO.hide();
    SM.hide();
    FT.hide();
    GOD.hide();
    AOTL.hide();
  });
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

}

function keyTyped() {

  if (key === ' ') {   
    songOne.stop();
    songTwo.stop();
    songThree.stop();
    songFour.stop();
    songFive.stop();
    songSix.stop();
    songSev.stop();
    songEte.stop();
    songNine.stop();
    isVisualizerActive = false;
    MT.show();
    UG.show();
    SH.show();
    TT.show();
    CMO.show();
    SM.show();
    FT.show();
    GOD.show();
    AOTL.show();
  }
  
}
