const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let w, h, isMobile;

function getGridSize() {
  return isMobile ? 40 : 75;
}

function drawGrid() {
  ctx.strokeStyle = "#1f1f204f";
  ctx.lineWidth = 1.1;

  const gridSize = getGridSize();

  for (let x = 0; x < w; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }

  for (let y = 0; y < h; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
}

function resize() {
  w = canvas.width = window.innerWidth - 10;
  h = canvas.height = 550;
  isMobile = w < 768;
}
window.addEventListener("resize", resize);
resize();

function animate() {
  ctx.clearRect(0, 0, w, h);
  drawGrid();
  requestAnimationFrame(animate);
}
// animate();