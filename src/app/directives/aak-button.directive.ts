import { Directive, Renderer2, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[AAk-Button]'
})
export class AAkButtonDirective {

  @Input() color: string;

  constructor(renderer: Renderer2, element: ElementRef) {
    renderer.addClass(element.nativeElement, 'btn');
    if(this.color) {
      renderer.addClass(element.nativeElement, `btn-${this.color}`);
    }
  }

}
