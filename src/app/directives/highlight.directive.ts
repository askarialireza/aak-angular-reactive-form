import { Directive, ElementRef, Input } from '@angular/core';

// @Directive({
//   selector: '[appHighlight]'
// })
// export class HighlightDirective {

//   constructor() { }

// }

@Directive({
  selector: '[highlight]',
  host: {
    '(click)': 'select()',
  }
})
export class HighlightDirective {
  private el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  @Input() elements;

  select() {
    this.elements.forEach(elt => {
      elt.unselect();
    });

    //this.el.nativeElement.style.backgroundColor = 'white';
    this.el.nativeElement.style.backgroundColor = '#D1D301';
  }

  unselect() {
    this.el.nativeElement.style.backgroundColor = 'black';
    //this.el.nativeElement.style.backgroundColor = 'white';
  }
}
