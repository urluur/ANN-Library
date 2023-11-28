import { initGfx, setDrawables } from './gfx.js';
import { generatePoints } from './data.js';

function main() {
  initGfx();
  const points = generatePoints(100);
  // console.table(points);

  setDrawables(points);
}

window.onload = main;