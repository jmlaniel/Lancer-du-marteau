// Render static part of experimental setup
function expStatSetup(p, rotAngle, pendAngle, springScale) {
  // Render weight horizontal string
  let LStr = vertStrHeight + bodyHeight / 2;
  let xStr =
    (0.7 * baseWidth) / 2 -
    0.95 * horLRodHeight -
    ((-0.95 * baseWidth) / 2 - supp2Height * p.cos(45)) -
    LStr * p.sin(pendAngle) -
    bodyRadius * p.cos(pendAngle);
  let yStr = LStr * (1 - p.cos(pendAngle)) + bodyRadius * p.sin(pendAngle);
  let horWStrHeight = p.sqrt(xStr ** 2 + yStr ** 2);
  let alpha = p.atan(yStr / xStr);

  p.ambientMaterial(0, 0, 0);
  p.push();
  p.translate(
    (-0.95 * baseWidth) / 2 - supp2Height * p.cos(45),
    -supp1Height - supp2Height * p.sin(45) - pulleyRadius,
    0
  );
  p.rotateZ(90 - alpha);
  p.translate(0, -horWStrHeight / 2, 0);
  p.cylinder(horWStrRadius, horWStrHeight);
  p.pop();

  // Render weight vertical string
  p.ambientMaterial(0, 0, 0);
  p.push();
  p.translate(
    (-0.95 * baseWidth) / 2 - supp2Height * p.cos(45) - pulleyRadius,
    -supp1Height - supp2Height * p.sin(45),
    0
  );
  p.translate(0, vertWStrHeight / 2, 0);
  p.cylinder(vertWStrRadius, vertWStrHeight);
  p.pop();

  // Render weight
  p.ambientMaterial(128, 128, 128);
  p.push();
  p.translate(
    (-0.95 * baseWidth) / 2 - supp2Height * p.cos(45) - pulleyRadius,
    -supp1Height - supp2Height * p.sin(45),
    0
  );
  p.translate(0, vertWStrHeight + weightHeight / 2, 0);
  p.cylinder(weightRadius, weightHeight);
  p.pop();
}
