// Function that setup slider gui
function guiSetup(p) {
  // Slider for angular speed (dynamic phase)
  sliderAngularSpeed = p.createSlider(
    angularSpeedMin,
    angularSpeedMax,
    0,
    angularSpeedStep
  );
  sliderAngularSpeed.position(20, 100);
  sliderAngularSpeed.style("width", "200px");

  // Slider for weight (static phase)
  sliderWeight = p.createSlider(weightMin, weightMax, 0, weightStep);
  sliderWeight.position(20, 150);
  sliderWeight.style("width", "200px");

  // Selector for phase (dynamic or static)
  selectPhase = p.createSelect();
  selectPhase.position(20, 180);
  selectPhase.option("Statique");
  selectPhase.option("Dynamique");
  selectPhase.selected("Statique");
}

// Function that display text
function guiText(p) {
  p.textFont(comicBoldFont);
  p.textSize(24);
  p.fill("white");
  p.text("Lancer du Marteau", -640, -610);
  p.textSize(18);
  p.text("JML 2021", -630, -580);
  p.text(
    "Vitesse de rotation (dynamique) : " +
      sliderAngularSpeed.value().toFixed(1),
    -630,
    -550
  );
  p.text("Poids (statique) : " + sliderWeight.value().toFixed(1), -630, -485);
}
