import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent {
  @ViewChild('canvas', { static: true })
  private canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  private colors: string[] = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'beige', 'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'beige', 'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'beige']

  ngOnInit() {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    const ratio = 0.8;

    const width = 400;
    const height = 400;
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = this.colors[0];
    // x y width height; x, y is the top left cornor of the canvas
    ctx.fillRect(0, 0, width, height);
 
    this.drawInnerRectangle(0, 0, width, height, 0);
  }

  
  drawInnerRectangle(x: number, y: number, width: number, height: number, count: number) {
    
    while(width > 1){
      x += width * 0.1;
      y += height * 0.1;
      width = width * 0.8;
      height = height * 0.8;
      const canvas = this.canvas.nativeElement;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = this.colors[count];
      ctx.fillRect(x, y, width, height);
      count++;
      console.log(`call draw func ${count}`)
      console.log(x, y, width, height, count)
      return this.drawInnerRectangle(x, y, width, height, count)
    
    }
     


  }
}
