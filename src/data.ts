import { Drawable } from './gfx';

export class Point implements Drawable {
  x: number;
  y: number;
  label: number;
  guessed: boolean; // did the algorithm guess this point correctly?

  constructor(x: number, y: number, label: number) {
    this.x = x;
    this.y = y;
    this.label = label;
    this.guessed = true;
  }

  public draw(ctx: CanvasRenderingContext2D, cw: number, ch: number): void {
    const displayX = this.x * cw;
    const displayY = this.y * ch;

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(displayX, displayY, 10, 0, 2 * Math.PI);

    // Fills the circle for label 1, otherwise just strokes it.
    if (this.label == 1) {
      ctx.fill();
    } else {
      ctx.stroke();
    }

    // Changes fill color based on the 'guessed' property.
    ctx.fillStyle = this.guessed ? "blue" : "red";
    ctx.beginPath();
    ctx.arc(displayX, displayY, 5, 0, 2 * Math.PI);
    ctx.fill();
  }
}

export function generatePoints(count: number): Point[] {
  const out: Point[] = [];

  for (let i = 0; i < count; i++) {
    const x = Math.random();
    const y = Math.random();
    const label = x > y ? 1 : -1;
    out.push(new Point(x, y, label));
  }

  return out;
}