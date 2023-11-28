const POINT_RADIUS = 8;

class Point {
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

  draw(ctx: CanvasRenderingContext2D, cw: number, ch: number): void {
    ctx.fillStyle = this.guessed ? 'lightgreen' : 'red';
    ctx.beginPath();
    let drawX = this.x * cw;
    let drawY = this.y * ch;
    ctx.arc(drawX, drawY, POINT_RADIUS, 0, 2 * Math.PI);
    ctx.fill();


    ctx.fillStyle = 'black'
    ctx.beginPath();
    drawX = this.x * cw;
    drawY = this.y * ch;
    ctx.arc(drawX, drawY, POINT_RADIUS, 0, 2 * Math.PI);
    ctx.stroke();
    
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