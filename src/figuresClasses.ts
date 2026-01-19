export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';
  color: 'red' | 'green' | 'blue';
  private a: number;
  private b: number;
  private c: number;

  constructor(color: 'red' | 'green' | 'blue', a: number, b: number, c: number) {

    if (a<=0 || b<=0 || c<=0) {
      throw new Error('All sides must be greater than 0');
    }

    const max = Math.max(a,b,c);
    const sumOthers = a +b + c - max;

    if (max >= sumOthers) {
      throw new Error('Invalid triangle sides');
    }
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Math.round(area);
  }

}


export class Circle implements Figure {
  shape: 'circle' = 'circle';
  color: 'red' | 'green' | 'blue';
  private radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {

    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.round(Math.PI * this.radius * this.radius);
  }

}


export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';
  color: 'red' | 'green' | 'blue';
  private width: number;
  private height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.round(this.width * this.height);
  }

}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`
}
