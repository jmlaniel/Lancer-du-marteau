// Lancer du Marteau Simulator
//
// Jacques M. Laniel, august 2021
//
// Global Variables
//
// canvas size
let canvasWidth = 1024;
let canvasHeight = 680;
// Time variables
let fps = 50;
// Initial phase state
phaseState = "dynamic";

// Parameters for pendulum tilt
let angularSpeedC = 200; // Angular speed at which tilt is 0 (degrés/s)
let pendAngleMax = 15; // Tilt max angle (degrés)
//Parameter for spring extension
let springXc = 20; // Spring extension when tilt is 0 (m)

// Angular speed (degrés/s)
let angularSpeed = 100;
// Slider parameter for controlling angular speed
let angularSpeedMin = 0;
let angularSpeedMax = 300;
let angularSpeedStep = 10;

// Weight for static phase
let weight = 100;
let weightC = 180; // Weight at which the pendulum is vertical
// Slider parameter for controlling weight during static phase
let weightMin = 0;
let weightMax = 300;
let weightStep = 20;

// Dimensions of base
let baseWidth = 500;
let baseHeight = 20;
let baseDepth = 200;
// Dimensions of pulley support part 1
let supp1Radius = 2;
let supp1Height = 125;
// Dimensions of pulley support part 2
let supp2Radius = 2;
let supp2Height = 70;
// Dimensions of pulley
let pulleyRadius = 25;
let pulleyHeight = 10;
// Dimensions of weight horizontal string
let horWStrRadius = 1;
let horWStrHeight = 250;
// Dimensions of weight vertical string
let vertWStrRadius = 1;
let vertWStrHeight = 100;
// Dimensions of weight
let weightRadius = 30;
let weightHeight = 40;

// Dimensions of reference
let refRadius = 2;
let refHeight = 125;
// Dimensions of support cylinder
let supCylRadius = 50;
let supCylHeight = 90;
// Dimensions of vertical rod
let vertRodRadius = 10;
let vertRodHeight = 500;
// Dimensions of horizontal rod (left part)
let horLRodRadius = 8;
let horLRodHeight = 250;
// Dimensions of horizontal rod (right part)
let horRRodRadius = 8;
let horRRodHeight = 150;
// Dimensions of counterweight
let cwRadius = 30;
let cwHeight = 70;
// Dimensions of vertical string
let vertStrRadius = 1;
let vertStrHeight = 250;
// Dimension of body part 1 (cylinder)
let bodyRadius = 30;
let bodyHeight = 50;
// Dimension of body part 2 (cone)
let body2Radius = 30;
let body2Height = 40;
// Dimensions of horizontal string
let horStrRadius = 1;
let horStrHeight = 250;
// Dimension of spring
let springRadius = 20;
let springHeight = 50;

// Create p5 instances for top and bottom sketches
let animP5 = new p5(sketch, "sketch");
