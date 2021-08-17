// p5.js sketch
//
// Jacques M. Laniel, august 2021
//
let sketch = function (p) {
  // p5 preload function
  p.preload = function () {
    springTexture = p.loadImage("assets/springTexture.gif");
    metalTexture = p.loadImage("assets/metalTexture.jpg");
    blueTexture = p.loadImage("assets/blueTexture.jpg");
    supportTexture = p.loadImage("assets/supportTexture.jpg");
    comicFont = p.loadFont("assets/comicsansms.ttf");
    comicBoldFont = p.loadFont("assets/comicsansmsgras.ttf");
  };

  // p5 setup function
  p.setup = function () {
    // Set pixel density to 1
    p.pixelDensity(1);
    // Create canvas using the whole browser window
    canvas = p.createCanvas(canvasWidth, canvasHeight, p.WEBGL);
    // Setup framerate fps = 1/dt
    p.frameRate(fps);
    // Set angle mode to degrees
    p.angleMode(p.DEGREES);
    // Setup gui
    guiSetup(p);
  };

  // p5 draw function
  p.draw = function () {
    // Setup rendering
    p.background(100);
    p.noStroke();
    p.ambientMaterial(0, 100, 255);
    p.ambientLight(150);
    p.directionalLight(255, 255, 255, 0, 0, -1);

    // Translate objects at the bottom of tha canvas
    p.translate(60, 250, -100);

    guiText(p);

    // Render scene
    if (selectPhase.value() == "Dynamique") {
      // Render dynamical phase
      dynamicalPhase(p);
    } else if (selectPhase.value() == "Statique") {
      staticPhase(p);
    }
  };
};
