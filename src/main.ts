import { initGfx, setDrawables } from './gfx.js';
import { generatePoints, Point } from './data.js';
import { Perceptron } from './perceptron.js';

async function main() {
  initGfx();
  const points = generatePoints(500);
  // console.table(points);
  setDrawables(points);

  const model = new Perceptron(2);

  for (const point of points) {
    const inputVector = [point.x, point.y];
    const error = model.fitOne(inputVector, point.label);
    predictAll(model, points);
    await sleep(100);
  }
}


function predictAll(model: Perceptron, data: Point[]) {
  for (const point of data) {
    const inputVector = [point.x, point.y];
    const prediction = model.predictOne(inputVector);
    point.guessed = (prediction === point.label);
  }
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

window.onload = main;