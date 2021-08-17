// Function for the dynamical simulation
function dynamicalPhase(p) {
  // read angular speed from slider
  angularSpeed = sliderAngularSpeed.value();
  // Compute rotation angle at given time
  let rotAngle = (angularSpeed * p.millis()) / 1000;
  // Pendullum tilt angle (degrees)
  let pendAngle = pendAngleMax * (angularSpeed ** 2 / angularSpeedC ** 2 - 1);
  // Scaling factor for spring
  let springX = springXc * (pendAngle / pendAngleMax + 1);
  let springScale = (springHeight + springX) / springHeight;

  // Render dynamic part of experimental setup with rotation
  expDynSetup(p, rotAngle, pendAngle, springScale);
}
