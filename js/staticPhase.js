// Function for the static simulation
function staticPhase(p) {
  // Set angular speed to 0
  angularSpeed = 0;
  // Set rotation angle to 0
  let rotAngle = 0;
  // Pendullum tilt angle (degrees)
  let pendAngle = pendAngleMax * (sliderWeight.value() / weightC - 1);
  // Scaling factor for spring
  let springX = springXc * (pendAngle / pendAngleMax + 1);
  let springScale = (springHeight + springX) / springHeight;

  // Render static part of experimental setup
  expStatSetup(p, rotAngle, pendAngle, springScale);
  // Render dynamic part of experimental setup forcing no rotation
  expDynSetup(p, rotAngle, pendAngle, springScale);
}
