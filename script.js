window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;
  document.getElementById("coordenadas").innerHTML = "<p>" + alpha + ", " + beta + ", " + gamma + "</p>"
}

document.write("funciona")




