const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
const FRAME_RATE = 5; //ms

let drawables: Drawable[] = [];

export class Drawable {
  draw(ctx: CanvasRenderingContext2D, cw: number, ch: number) { }
}

export function setDrawables(dr: Drawable[]): void {
  drawables = dr;
}

function clearScreen(): void {
  const ctx = getContext();
  ctx.fillStyle = 'whitesmoke';
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw(): void {
  clearScreen();
  drawDrawables();
}

export function initGfx(): void {
  const canvas = getCanvas();
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  setInterval(draw, FRAME_RATE);
}

function drawDrawables(): void {
  const ctx = getContext();
  drawables.forEach((dr) => dr.draw(ctx, CANVAS_WIDTH, CANVAS_HEIGHT));
}

function getCanvas(): HTMLCanvasElement {
  const canvas = document.getElementsByTagName('canvas')[0];
  if (!canvas) {
    throw new Error('No canvas found');
  }
  return canvas;
}

function getContext(): CanvasRenderingContext2D {
  const context = getCanvas().getContext('2d');
  if (!context) {
    throw new Error('No context found');
  }
  return context;
}