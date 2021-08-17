// Render dynamic part of experimental setup
function expDynSetup(p, rotAngle, pendAngle, springScale) {
  // Render base
  p.texture(blueTexture);
  p.push();
  p.translate(0, baseHeight / 2, 0);
  p.box(baseWidth, baseHeight, baseDepth);
  p.pop();

  // Render pulley support part 1
  p.texture(metalTexture);
  p.push();
  p.translate((-0.95 * baseWidth) / 2, -supp1Height / 2, 0);
  p.cylinder(supp1Radius, supp1Height);
  p.pop();

  // Render pulley support part 2
  p.texture(metalTexture);
  p.push();
  p.translate((-0.95 * baseWidth) / 2, -supp1Height / 2, 0);
  p.rotateZ(-45);
  p.translate(
    +(supp1Height / 2) * p.sin(45),
    -(supp1Height / 2) * p.cos(45) - supp2Height / 2,
    0
  );
  p.cylinder(supp2Radius, supp2Height);
  p.pop();

  // Render pulley
  p.ambientMaterial(0, 0, 0);
  p.push();
  p.translate((-0.95 * baseWidth) / 2, -supp1Height / 2, 0);
  p.rotateZ(-45);
  p.translate(
    +(supp1Height / 2) * p.sin(45),
    -(supp1Height / 2) * p.cos(45) - supp2Height,
    0
  );
  p.rotateX(90);
  p.cylinder(pulleyRadius, pulleyHeight);
  p.pop();

  // Render support cylinder
  p.texture(supportTexture);
  p.push();
  p.translate((0.7 * baseWidth) / 2, -supCylHeight / 2, 0);
  p.cylinder(supCylRadius, supCylHeight);
  p.pop();

  // Render reference
  p.texture(metalTexture);
  p.push();
  p.translate((0.7 * baseWidth) / 2 - 0.95 * horLRodHeight, -refHeight / 2, 0);
  p.cylinder(refRadius, refHeight);
  p.pop();

  // Render vertical rod
  p.texture(metalTexture);
  p.push();
  p.translate((0.7 * baseWidth) / 2, -vertRodHeight / 2, 0);
  p.cylinder(vertRodRadius, vertRodHeight);
  p.pop();

  // Render horizontal rod (left part)
  p.texture(metalTexture);
  p.push();
  p.translate((0.7 * baseWidth) / 2, -0.95 * vertRodHeight, 0);
  p.rotateY(rotAngle);
  p.rotateZ(90);
  p.translate(0, horLRodHeight / 2, 0);
  p.cylinder(horLRodRadius, horLRodHeight);
  p.pop();

  // Render horizontal rod (right part)
  p.texture(metalTexture);
  p.push();
  p.translate((0.7 * baseWidth) / 2, -0.95 * vertRodHeight, 0);
  p.rotateY(rotAngle);
  p.rotateZ(90);
  p.translate(0, -horRRodHeight / 2, 0);
  p.cylinder(horRRodRadius, horRRodHeight);
  p.pop();

  // Render counterwwight
  p.texture(metalTexture);
  p.push();
  p.translate((0.7 * baseWidth) / 2, -0.95 * vertRodHeight, 0);
  p.rotateY(rotAngle);
  p.rotateZ(90);
  p.translate(0, -0.6 * horRRodHeight, 0);
  p.cylinder(cwRadius, cwHeight);
  p.pop();

  // Render vertical string
  p.ambientMaterial(0, 0, 0);
  p.push();
  p.translate((0.7 * baseWidth) / 2, 0, 0);
  p.rotateY(rotAngle);
  p.translate(-0.95 * horLRodHeight, -0.95 * vertRodHeight, 0);
  p.translate(
    -(vertStrHeight / 2) * p.sin(pendAngle),
    (vertStrHeight / 2) * p.cos(pendAngle),
    0
  );
  p.rotateZ(pendAngle);
  p.cylinder(vertStrRadius, vertStrHeight);
  p.pop();

  // Render body
  p.ambientMaterial(0, 0, 0);
  p.push();
  p.translate((0.7 * baseWidth) / 2, 0, 0);
  p.rotateY(rotAngle);
  p.translate(-0.95 * horLRodHeight, -0.95 * vertRodHeight, 0);
  p.translate(
    -(vertStrHeight + bodyHeight / 2) * p.sin(pendAngle),
    (vertStrHeight + bodyHeight / 2) * p.cos(pendAngle),
    0
  );
  p.rotateZ(pendAngle);
  p.cylinder(bodyRadius, bodyHeight);
  p.pop();

  // Render body part 2
  p.ambientMaterial(0, 0, 0);
  p.push();
  p.translate((0.7 * baseWidth) / 2, 0, 0);
  p.rotateY(rotAngle);
  p.translate(-0.95 * horLRodHeight, -0.95 * vertRodHeight, 0);
  p.translate(
    -(vertStrHeight + bodyHeight + body2Height / 2) * p.sin(pendAngle),
    (vertStrHeight + bodyHeight + body2Height / 2) * p.cos(pendAngle),
    0
  );
  p.rotateZ(pendAngle);
  p.cone(body2Radius, body2Height);
  p.pop();

  // Render horizontal string
  LStr = vertStrHeight + bodyHeight / 2;
  xStr =
    0.95 * horLRodHeight +
    LStr * p.sin(pendAngle) -
    bodyRadius * p.cos(pendAngle);
  yStr = LStr * (1 - p.cos(pendAngle)) - bodyRadius * p.sin(pendAngle);
  horStrHeight = p.sqrt(xStr ** 2 + yStr ** 2);
  alpha = p.atan(yStr / xStr);

  p.ambientMaterial(0, 0, 0);
  p.push();
  p.translate(
    (0.7 * baseWidth) / 2,
    -0.95 * vertRodHeight + vertStrHeight + bodyHeight / 2,
    0
  );
  p.rotateY(rotAngle);
  p.rotateZ(90 + alpha);
  p.translate(0, horStrHeight / 2, 0);
  p.cylinder(horStrRadius, horStrHeight);
  p.pop();

  // Render spring
  p.texture(springTexture);
  p.push();
  p.translate(
    (0.7 * baseWidth) / 2,
    -0.95 * vertRodHeight + vertStrHeight + bodyHeight / 2,
    0
  );
  p.rotateY(rotAngle);
  p.rotateZ(90 + alpha);
  p.translate(0, horStrHeight / 2, 0);
  p.scale(1, springScale, 1);
  p.cylinder(springRadius, springHeight, 24, 1, 0, 0);
  p.ambientMaterial(0, 0, 0);
  p.cylinder(0.99 * springRadius, springHeight, 24, 1, 1, 1);
  p.pop();
}
